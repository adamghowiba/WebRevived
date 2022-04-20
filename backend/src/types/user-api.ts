import { User } from "@prisma/client";
import { Request } from "express";

type UserPostBody = Pick<User, 'email' | 'first_name' | 'last_name' | 'password' | 'role'>
export type UserPostRequest = Request<unknown, unknown, UserPostBody>;

type UserLoginBody = Pick<User, 'email' | 'password'>
export type UserLoginRequest = Request<unknown, unknown, UserLoginBody>;