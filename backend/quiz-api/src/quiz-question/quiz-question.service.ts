import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';
import { UpdateQuizQuestionDto } from './dto/update-quiz-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizQuestion } from './entities/quiz-question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizQuestionService {
  constructor(
    @InjectRepository(QuizQuestion)
    private quizQuestionRepository: Repository<QuizQuestion>,
  ) { }
  async create(createQuizQuestionDto: CreateQuizQuestionDto, image: string) {
    const newQuestion = this.quizQuestionRepository.create({ ...createQuizQuestionDto, image })
    return await this.quizQuestionRepository.save(newQuestion)
  }

  findAll() {
    return `This action returns all quizQuestion`;
  }

  async findOne(id: number) {
    const question = await this.quizQuestionRepository.findOneBy({ id });
    if (question) {
      return question
    } else {
      throw new BadRequestException("Invalid Question")
    }

  }

  async update(updateQuizQuestionDto: UpdateQuizQuestionDto, image: string) {
    const { id, quizId, description } = updateQuizQuestionDto
    return await this.quizQuestionRepository.update({ id }, { quizId, description, image })
  }

  async remove(id: number) {
    return await this.quizQuestionRepository.delete(id);
  }
  async getByQuizId(quizId: number) {
    const quiz = await this.quizQuestionRepository.findOneBy({ quizId })
    if (quiz) {
      return quiz;
    } else {
      throw new BadRequestException('Invalid quizId');
    }
  }
}
