import { UserRole } from '@prisma/client';
import Joi from 'joi';

const userValidation = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
	first_name: Joi.string().alter({
		post: schema => schema.required(),
		get: schema => schema.forbidden()
	}),
	last_name: Joi.string().alter({
		post: schema => schema.optional(),
		get: schema => schema.forbidden()
	}),
	role: Joi.string()
		.valid(...Object.values(UserRole).map(value => value.toLowerCase()))
		.alter({
			post: schema => schema.optional(),
			get: schema => schema.forbidden()
		})
});

export const userPostValidation = userValidation.tailor('post');
export const userGetValidation = userValidation.tailor('get');
