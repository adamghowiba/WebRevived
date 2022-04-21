import type Joi from 'joi';

export interface ValidateScehma {
	body?: Joi.ObjectSchema;
	query?: Joi.ObjectSchema;
	params?: Joi.ObjectSchema;
}
