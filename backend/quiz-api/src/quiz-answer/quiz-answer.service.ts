import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuizAnswerDto } from './dto/create-quiz-answer.dto';
import { UpdateQuizAnswerDto } from './dto/update-quiz-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizAnswer } from './entities/quiz-answer.entity';
import { IsNull, Repository } from 'typeorm';
import { QuizQuestion } from 'src/quiz-question/entities/quiz-question.entity';

@Injectable()
export class QuizAnswerService {
  constructor(@InjectRepository(QuizAnswer)
  private quizAnswerRepository: Repository<QuizAnswer>, @InjectRepository(QuizQuestion)
    private quizQuestionRepository: Repository<QuizQuestion>,) { }
  async create(createQuizAnswerDto: CreateQuizAnswerDto) {
    const question = await this.quizQuestionRepository.findOneBy({ id: createQuizAnswerDto.questionId })
    if (!question) {
      throw new BadRequestException("Invalid questionId");
    }


    const newAnswer = this.quizAnswerRepository.create({ ...createQuizAnswerDto });
    return await this.quizAnswerRepository.save(newAnswer);

  }


  findAll() {
    return `This action returns all quizAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quizAnswer`;
  }

  async update(updateQuizAnswerDto: UpdateQuizAnswerDto) {
    const { answerId, questionId, description, correctAnswer } = updateQuizAnswerDto;
    const answer = await this.quizAnswerRepository.findOneBy({ id: answerId })
    if (answer) {
      return await this.quizAnswerRepository.update({ id: answerId }, { questionId, description, correctAnswer })
    } else {
      throw new BadRequestException("Invalid answerId")
    }
  }

  async remove(id: number) {
    const isValidId = await this.quizAnswerRepository.findOneBy({ id });
    if (!isValidId) {
      throw new BadRequestException("Invalid Id");
    }
    return await this.quizAnswerRepository.delete({ id });
  }
}
