import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../users.entity';
import { NotFoundException } from '@nestjs/common';
import { UserService } from '../user.service';
import { UsersArgs } from '../../utils/user_args';
import { UpdateUserInput } from '../dto/udpate_user_input';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [User], { name: 'users' })
  users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.usersService.findAll(usersArgs);
  }

  @Query(() => User)
  public async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(() => User)
  public async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.usersService.update(id, updateUserInput);
  }
}
