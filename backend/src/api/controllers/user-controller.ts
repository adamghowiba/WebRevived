import ApiError from '@errors/ApiError';
import { User } from '@prisma/client';
import { userService } from '@services';
import { UserPostRequest } from '../../types/user-api';
import { catchAsync } from '@utils/error-utils';
import { userPostValidation } from '@validation/user-validation';
import { Request, Response } from 'express';
import { transformRoleString } from '@utils/role-utils';
import { hash, genSalt } from 'bcrypt';

export const createUser = catchAsync(async (req: UserPostRequest, res: Response) => {
	const { error } = userPostValidation.validate(req.body);
	if (error) throw new ApiError(error.message);

	const salt = await genSalt(10);
	const hashedPassword = await hash(req.body.password, salt);

	const createdUser = await userService.createUser({ ...req.body, password: hashedPassword, role: transformRoleString(req.body.role) });
	return res.json(createdUser);
});
