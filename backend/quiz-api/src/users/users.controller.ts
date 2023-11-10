import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus, Put, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@UploadedFile(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /^(image\/png|image\/jpeg|text\/plain|application\/pdf|jpg|jpeg|png|txt|pdf|gif)$/i,
      })
      .addMaxSizeValidator({
        maxSize: 5000 * 1024
      })
      .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
      }),
  ) image: Express.Multer.File, @Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto, image.filename);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }
  @Get()
  fetchUserPaginate(@Query('page') page: string, @Query('limit') limit: string) {
    return this.usersService.fetchUserPaginate(+page,+limit)

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put()
  @UseInterceptors(FileInterceptor('image'))
  update(
    @UploadedFile(new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({ maxSize: 5000 * 1024 }),
        new FileTypeValidator({ fileType: /^(image\/png|image\/jpeg|text\/plain|application\/pdf|jpg|jpeg|png|txt|pdf|gif)$/i }),
      ],
    }),) image: Express.Multer.File,
    @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto, image?.filename);
  }

  @Delete()
  remove(
    @Body('id') id: string
  ) {
    return this.usersService.remove(+id);
  }
}
