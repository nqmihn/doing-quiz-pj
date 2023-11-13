import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) { }
  async create(createQuizDto: CreateQuizDto, quizImage: string) {
    const newQuiz = this.quizRepository.create({ ...createQuizDto, quizImage });
    const data = await this.quizRepository.save(newQuiz)
    return data;
  }

  findAll() {
    return `This action returns all quizzes`;
  }

  async findOne(id: number) {
    return await this.quizRepository.findOneBy({ id });
  }

  async update(updateQuizDto: UpdateQuizDto, quizImage: string) {
    const { id, name, description, difficulty } = updateQuizDto
    return await this.quizRepository.update({ id }, { name, description, difficulty, quizImage })
  }

  async remove(id: number) {
    return await this.quizRepository.delete({ id });
  }
}
