import { Account } from '@prisma/client';
import Joi from 'joi';
import { ValidateScehma } from '../types/validation';

export const accountRequestBody = Joi.object({
	name: Joi.string().min(2).required(),
	phone: Joi.string().optional(),
	industry: Joi.string().optional()
});

const createProject: ValidateScehma = {
	body: Joi.object<Account>().keys({
		name: Joi.string().required(),
		city: Joi.string().optional(),
		state: Joi.string().optional(),
		code: Joi.string().optional(),
		phone: Joi.string().optional(),
		country: Joi.string().optional(),
		industry: Joi.string().optional(),
		street: Joi.string().optional()
	})
};

export default { createProject };
