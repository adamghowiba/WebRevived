import { Request, Response } from 'express';
import ApiError from '@errors/ApiError';
import { catchAsync } from '@utils/error-utils';
import { UserLoginRequest } from '../../types/user-api';
import { userService } from '@services';
import { userGetValidation } from '@validation/user-validation';
import { compare } from 'bcrypt';

export const login = catchAsync(async (req: UserLoginRequest, res: Response) => {
	const { error } = userGetValidation.validate(req.body);
	if (error) throw new ApiError(error.message);

	const foundUser = await userService.findByEmail(req.body.email);
	if (!foundUser) throw new ApiError(`Email ${req.body.email} does not exsist.`);

	const validPassword = await compare(req.body.password, foundUser.password);
	if (!validPassword) throw new ApiError(`Incorrect password. Please try again`);

	req.session.user = { email: foundUser.email, id: foundUser.id, role: foundUser.role };
	res.status(200).send(foundUser);
});
