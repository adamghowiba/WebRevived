import Joi from 'joi';

export const accountRequestBody = Joi.object({
	name: Joi.string().min(2).required(),
	phone: Joi.string().optional(),
	industry: Joi.string().optional()
});
