import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserInput } from './dto/udpate_user_input';
import { User } from './users.entity';

// import * as bcrypt from 'bcrypt';
import { UsersArgs } from '../utils/user_args';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    const { limit, skip } = usersArgs;
    return await this.usersRepository.find({
      skip: skip,
      take: limit,
    });
  }

  async findOneById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    // updateUserInput.password = bcrypt.hashSync(updateUserInput.password, 8);

    const user = await this.usersRepository.preload({
      id: id,
      ...updateUserInput,
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.usersRepository.save(user);
  }
}
