import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { Quiz } from './quizzes/entities/quiz.entity';
import { UserQuizModule } from './user-quiz/user-quiz.module';
import { UserQuiz } from './user-quiz/entities/user-quiz.entity';
import { QuizQuestionModule } from './quiz-question/quiz-question.module';
import { QuizQuestion } from './quiz-question/entities/quiz-question.entity';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: +(configService.get<string>('DB_PORT')),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      entities: [User, Quiz, UserQuiz, QuizQuestion],
      synchronize: true,
    }),
    inject: [ConfigService],
  }), UsersModule, FilesModule, AuthModule, QuizzesModule, UserQuizModule, QuizQuestionModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
