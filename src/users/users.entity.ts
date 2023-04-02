import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export enum RoleStatus {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
@Entity()
@ObjectType()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ length: 60 })
  password: string;

  @Field()
  @Column({
    type: 'enum',
    enum: RoleStatus,
    default: RoleStatus.USER,
  })
  role: RoleStatus;
}
