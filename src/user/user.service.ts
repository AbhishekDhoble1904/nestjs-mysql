import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(createUserDTO: CreateUserDTO) {
    return this.usersRepository.save(createUserDTO);
  }

  update(updateDTO: UpdateUserDTO, userId: number) {
    return this.usersRepository.update(userId, updateDTO);
  }

  showId(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  delete(userId: number) {
    return this.usersRepository.delete(userId);
  }
}
