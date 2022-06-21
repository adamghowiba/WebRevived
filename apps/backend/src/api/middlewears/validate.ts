/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import ApiError from '@errors/ApiError';
import { ValidateScehma } from '@type/validation';
import { pick } from '@utils/pick-utils';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const joiErrorOptions: Joi.ErrorFormattingOptions = {
	label: 'key',
	wrap: {
		label: ''
	}
};

/* Todo we can do better here..... */
export const validate =
	(schema: ValidateScehma, abortEarly = false) =>
	(req: Request, res: Response, next: NextFunction) => {
		const validSchema = pick(schema, ['params', 'query', 'body']);
		const requestObject = pick(req, Object.keys(validSchema));

		const { value, error } = Joi.compile(validSchema)
			.prefs({ abortEarly, convert: true })
			.validate(requestObject, { errors: joiErrorOptions });

		if (error) {
			const errorMessages = error.details.map(details => details.message).join(', ');
			const formatedMessages = error.details.length > 1 ? `[${errorMessages}]` : errorMessages;

			return next(new ApiError(formatedMessages, 400));
		}

		Object.assign(req, value);
		return next();
	};

interface ValidationReturn<Request> {
	values: Request | undefined;
	error: undefined | string;
}
export const validateRequest = <R>(schema: ValidateScehma, request: R): ValidationReturn<R> => {
	const validSchema = pick(schema, ['params', 'query', 'body']);
	const requestObject = pick(request, Object.keys(validSchema));

	const { value, error } = Joi.compile(validSchema)
		.prefs({ abortEarly: true, convert: true })
		.validate(requestObject, { errors: joiErrorOptions });

	if (error) {
		const errorMessages = error.details.map(details => details.message).join(', ');
		const formatedMessages = error.details.length > 1 ? `[${errorMessages}]` : errorMessages;

		return { values: value , error: JSON.stringify(formatedMessages, null, 2) };
	}

	return { values: value, error: undefined };
};
