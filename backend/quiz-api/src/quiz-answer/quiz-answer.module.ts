import { Module } from '@nestjs/common';
import { QuizAnswerService } from './quiz-answer.service';
import { QuizAnswerController } from './quiz-answer.controller';
import { QuizAnswer } from './entities/quiz-answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionModule } from 'src/quiz-question/quiz-question.module';
import { QuizQuestion } from 'src/quiz-question/entities/quiz-question.entity';

@Module({
  imports: [QuizQuestionModule, TypeOrmModule.forFeature([QuizAnswer, QuizQuestion]),],
  controllers: [QuizAnswerController],
  providers: [QuizAnswerService]
})
export class QuizAnswerModule { }
