import Joi from 'joi';

export const formPost = Joi.object({
	name: Joi.string().min(2).required(),
	contactIds: Joi.array().items(Joi.number()).min(1).required()
});
