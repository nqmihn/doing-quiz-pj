import { Controller, Get, UseGuards, Post, Req, Res, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public, User } from 'src/decorator/customize';
import { Response, Request } from 'express';
import { IUser } from 'src/users/user.interface';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService) { }


    @UseGuards(LocalAuthGuard)
    @Public()
    @Post('login')
    async login(@Req() req, @Res({ passthrough: true }) response: Response) {
        return this.authService.login(req.user, response);
    }

    @Get('/account')
    getAccount(@User() user: IUser) {
        return { user };
    }

    @Post('/refresh')
    @Public()
    handleRefreshToken(@Req() req: Request, @Res({ passthrough: true }) response: Response) {
        const refreshToken = req.cookies["refresh_token"];
        return this.authService.processNewToken(refreshToken, response);
    }
    @Post('logout')
    logout(@Res({ passthrough: true }) response: Response, @User() user: IUser) {
        return this.authService.logout(response, user)
    }
    @Post('register')
    @Public()
    register(@Body() registerUserDto: RegisterUserDto) {
        return this.userService.register(registerUserDto);
    }
    @Post('change-password')
    changePassword(@User() user: IUser, @Body('current_password') currentPassword: string, @Body('new_password') newPassword: string) {
        return this.userService.changePassword(user, currentPassword, newPassword);
    }
}   
