import { Module } from '@nestjs/common';
import { QuizAnswerService } from './quiz-answer.service';
import { QuizAnswerController } from './quiz-answer.controller';
import { QuizAnswer } from './entities/quiz-answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionModule } from 'src/quiz-question/quiz-question.module';
import { QuizQuestion } from 'src/quiz-question/entities/quiz-question.entity';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from 'src/files/multer.config';

@Module({
  imports: [QuizQuestionModule, TypeOrmModule.forFeature([QuizAnswer, QuizQuestion]), MulterModule.registerAsync({
    useClass: MulterConfigService,
  }),],
  controllers: [QuizAnswerController],
  providers: [QuizAnswerService],
  exports: [QuizAnswerService]
})
export class QuizAnswerModule { }
