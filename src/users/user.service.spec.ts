import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { RoleStatus, User } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../app.module';

describe('UserService', () => {
  let service: UserService;
  let users: User[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([User])],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    users = await service.findAll({
      skip: 0,
      limit: 25,
    });
    // args.limit = 25;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', async () => {
    expect(
      await service.findAll({
        skip: 0,
        limit: 25,
      }),
    ).toBeInstanceOf(Array<User>);
    // ).toEqual(users);
  });

  it('should return a user', async () => {
    expect(await service.findOneById(users[0].id)).toBeInstanceOf(User);
  });

  it('should update a user', async () => {
    expect(
      await service.update(users[0].id, {
        ...users[0],
        name: 'John Doe',
        role: RoleStatus.ADMIN,
      }),
    ).toHaveProperty('name', 'John Doe');
  });
});
