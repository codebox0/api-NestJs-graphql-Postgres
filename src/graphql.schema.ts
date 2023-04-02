
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class CreateUserInput {
    name: string;
    firstName: string;
    email: string;
    password: string;
    role: Role;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    firstName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<Role>;
}

export class User {
    id?: Nullable<string>;
    name: string;
    firstName: string;
    email: string;
    password: string;
    role: Role;
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
