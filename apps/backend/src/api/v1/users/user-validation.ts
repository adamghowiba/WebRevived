import { UserRole } from '@prisma/client';
import { UserLoginBody, UserPostBody } from '@type/user-api';
import { ValidateScehma } from '@type/validation';
import Joi from 'joi';

const createUser: ValidateScehma = {
	body: Joi.object<UserPostBody>().keys({
		email: Joi.string().required(),
		password: Joi.string().required(),
		first_name: Joi.string(),
		last_name: Joi.string(),
		role: Joi.string().valid(...Object.values(UserRole).map(value => value.toLowerCase()))
	})
};

const loginUser: ValidateScehma = {
	body: Joi.object<UserLoginBody>({
		email: Joi.string().email().required(),
		password: Joi.string().required()
	})
};

export default {
	loginUser,
	createUser
};
