import { User } from '@prisma/client';
import { BodyRequest } from './request';

export type UserPostBody = User;
export type UserPostRequest = BodyRequest<UserPostBody>;

export type UserLoginBody = Pick<User, 'email' | 'password'>;
export type UserLoginRequest = BodyRequest<UserPostBody>;
