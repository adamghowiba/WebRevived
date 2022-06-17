import { Account } from '@prisma/client';
import { AccountRequest } from '@type/account';
import Joi from 'joi';
import { ValidateScehma } from '../../../types/validation';
import { routeValidation } from '../../../helpers/validation-helper';
import { AccountApi } from '@webrevived/types/account';

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

const getByIdSchema = routeValidation({
	query: Joi.object<AccountRequest.GetQueryParams>().keys({
		contacts: Joi.boolean(),
		projects: Joi.boolean(),
		websites: Joi.boolean(),
		users: Joi.boolean()
	})
});

const updateAccountOptional = createAccount.body.fork('name', schema => schema.optional());
const updateAccount = routeValidation({
	body: updateAccountOptional.concat(
		Joi.object<AccountApi.PutInclude>({
			users: Joi.array().items(Joi.number()),
			projects: Joi.array().items(Joi.number()),
			websites: Joi.array().items(Joi.number())
		})
	),
	params: Joi.object({
		account_id: Joi.number()
	})
});

export default { createAccount, updateAccount, getByIdSchema };
