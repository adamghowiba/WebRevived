/* eslint-disable import/prefer-default-export */
import ApiError from '@errors/ApiError';
import { userService } from '@services';
import { catchAsync } from '@utils/error-utils';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { UserLoginRequest } from '../../types/user-api';

export const login = catchAsync(async (req: UserLoginRequest, res: Response) => {
	const foundUser = await userService.findByEmail(req.body.email);
	if (!foundUser) throw new ApiError(`Email ${req.body.email} does not exsist.`);

	const validPassword = await compare(req.body.password, foundUser.password);
	if (!validPassword) throw new ApiError(`Incorrect password. Please try again`);

	req.session.user = { email: foundUser.email, id: foundUser.id, role: foundUser.role };
	res.status(200).send(foundUser);
});

export const me = (req: Request, res: Response) => {
	const user = req.session?.user;
	if (!user) return res.status(401).json('Unauthorized');

	return res.json(user);
};
