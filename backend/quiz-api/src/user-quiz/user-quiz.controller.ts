import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserQuizService } from './user-quiz.service';
import { CreateUserQuizDto } from './dto/create-user-quiz.dto';
import { UpdateUserQuizDto } from './dto/update-user-quiz.dto';
import { Public, User } from 'src/decorator/customize';
import { IUser } from 'src/users/user.interface';

@Controller('user-quiz')
export class UserQuizController {
  constructor(private readonly userQuizService: UserQuizService) { }

  @Post('assign')
  assignQuizToUser(@Body() createUserQuizDto: CreateUserQuizDto) {
    return this.userQuizService.assign(createUserQuizDto);
  }
  @Get('quiz-by-user')
  getQuizByUser(@User() user: IUser) {
    return this.userQuizService.getQuizByUser(user);

  }
}
