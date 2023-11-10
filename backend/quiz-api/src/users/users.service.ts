import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  getHashPassword = (password: string) => {

    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash
  }
  async create(createUserDto: CreateUserDto, image: string) {
    const { email, password, username, role } = createUserDto
    const newUser = this.usersRepository.create({
      email,
      password: this.getHashPassword(password),
      username,
      role,
      image
    });
    const data = await this.usersRepository.save(newUser);
    return {
      id: data?.id,
      email: data?.email,
      username: data?.username,
      role: data?.role,
      createdAt: data?.createdAt,
    }
  }

  findAll() {
    return this.usersRepository.find({ select: ['id', 'username', 'email', 'role', 'image'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async fetchUserPaginate(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const defaultLimit = limit ? limit : 10;
    const totalItems = (await this.usersRepository.find()).length
    const totalPages = Math.ceil(totalItems / defaultLimit)
    const users = await this.usersRepository.find({ take: defaultLimit, skip: offset, select: ['id', 'username', 'email', 'role', 'image'] })
    return {
      totalRows: totalItems,
      totalPages: totalPages,
      users
    }
  }

  async update(updateUserDto: UpdateUserDto, image: string) {
    const { id, username, role } = updateUserDto
    return await this.usersRepository.update({ id }, { username, role, image })
  }

  async remove(id: number) {
    return await this.usersRepository.delete({ id });
  }
}
