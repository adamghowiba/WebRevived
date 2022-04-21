import { User } from '@prisma/client';
import { BodyRequest } from './request';

export type UserPostBody = Pick<User, 'email' | 'first_name' | 'last_name' | 'password' | 'role'>;
export type UserPostRequest = BodyRequest<UserPostBody>;

export type UserLoginBody = Pick<User, 'email' | 'password'>;
export type UserLoginRequest = BodyRequest<UserPostBody>;
