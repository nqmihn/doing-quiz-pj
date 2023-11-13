import { Module } from '@nestjs/common';
import { QuizQuestionService } from './quiz-question.service';
import { QuizQuestionController } from './quiz-question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestion } from './entities/quiz-question.entity';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from 'src/files/multer.config';

@Module({
  imports: [TypeOrmModule.forFeature([QuizQuestion]), MulterModule.registerAsync({
    useClass: MulterConfigService,
  }),],
  controllers: [QuizQuestionController],
  providers: [QuizQuestionService]
})
export class QuizQuestionModule {}
