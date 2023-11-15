import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { QuizAnswerService } from './quiz-answer.service';
import { CreateQuizAnswerDto } from './dto/create-quiz-answer.dto';
import { UpdateQuizAnswerDto } from './dto/update-quiz-answer.dto';
import { Public } from 'src/decorator/customize';
import { QuizQuestionService } from 'src/quiz-question/quiz-question.service';

@Controller('answer')
export class QuizAnswerController {
  constructor(private readonly quizAnswerService: QuizAnswerService,) { }

  @Post()
  create(@Body() createQuizAnswerDto: CreateQuizAnswerDto) {
    return this.quizAnswerService.create(createQuizAnswerDto);


  }

  @Get()
  findAll() {
    return this.quizAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizAnswerService.findOne(+id);
  }

  @Put()
  update(@Body() updateQuizAnswerDto: UpdateQuizAnswerDto) {
    return this.quizAnswerService.update(updateQuizAnswerDto);
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string) {
    return this.quizAnswerService.remove(+id);
  }
}
