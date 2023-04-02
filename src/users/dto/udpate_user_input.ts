import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { RoleStatus } from '../users.entity';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsString()
  @IsOptional()
  readonly name: string;

  @Field()
  @IsString()
  @IsOptional()
  readonly firstName: string;

  @Field()
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @MaxLength(60)
  password: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  @IsEnum(RoleStatus)
  role: RoleStatus;
}
