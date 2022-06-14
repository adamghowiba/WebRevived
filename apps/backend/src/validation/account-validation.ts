import { Account } from '@prisma/client';
import Joi from 'joi';
import { ValidateScehma } from '../types/validation';

export const accountRequestBody = Joi.object({
	name: Joi.string().min(2).required(),
	phone: Joi.string().optional(),
	industry: Joi.string().optional()
});

const createAccount: ValidateScehma = {
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

const optionalAccount = createAccount.body.fork('name', schema => schema.optional());
const updateAccount: ValidateScehma = {
	body: optionalAccount,
	params: Joi.object({
		account_id: Joi.number()
	})
};

export default { createAccount, updateAccount };
