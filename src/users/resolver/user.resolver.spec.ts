import { UserResolver } from './user.resolver';
import { RoleStatus, User } from '../users.entity';
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppModule } from "../../app.module";

describe('UserResolver', () => {
  let resolver: UserResolver;

  let users: User[];

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([User])],
      providers: [],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    users = await resolver.users({
      skip: 0,
      limit: 25,
    });
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('users', () => {
    it('should return an array of users', async() => {
      expect(
        await resolver.users({
          skip: 0,
          limit: 25,
        }),
      ).toBeInstanceOf(Array<User>);
    });
  });

  describe('user', () => {
    it('should return a user', async () => {
      expect(await resolver.user(users[0].id)).toBeInstanceOf(User);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async() => {
      expect(
        await resolver.updateUser(users[0].id, {
          ...users[0],
          name: 'John Doe',
          role: RoleStatus.ADMIN,
        }),
      ).toHaveProperty('name', 'John Doe');
    });
  });
});
