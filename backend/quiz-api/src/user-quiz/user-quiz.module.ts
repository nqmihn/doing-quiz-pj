import { Module } from '@nestjs/common';
import { UserQuizService } from './user-quiz.service';
import { UserQuizController } from './user-quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQuiz } from './entities/user-quiz.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { QuizzesService } from 'src/quizzes/quizzes.service';
import { Quiz } from 'src/quizzes/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserQuiz, User, Quiz]),],
  controllers: [UserQuizController],
  providers: [UserQuizService, UsersService, QuizzesService]
})
export class UserQuizModule { }
