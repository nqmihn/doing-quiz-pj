import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizQuestionService } from './quiz-question.service';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';
import { UpdateQuizQuestionDto } from './dto/update-quiz-question.dto';

@Controller('quiz-question')
export class QuizQuestionController {
  constructor(private readonly quizQuestionService: QuizQuestionService) {}

  @Post()
  create(@Body() createQuizQuestionDto: CreateQuizQuestionDto) {
    return this.quizQuestionService.create(createQuizQuestionDto);
  }

  @Get()
  findAll() {
    return this.quizQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizQuestionDto: UpdateQuizQuestionDto) {
    return this.quizQuestionService.update(+id, updateQuizQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizQuestionService.remove(+id);
  }
}
