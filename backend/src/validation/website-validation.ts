import { Website } from '@prisma/client';
import { WebsiteGetQueryParam } from '@type/website-api';
import Joi from 'joi';

export const websiteRequestBody = Joi.object<Website>({
	account_id: Joi.string().required(),
	url: Joi.string().required(),
});

export const websiteQueryPValidation = Joi.object<WebsiteGetQueryParam>({
	account_id: Joi.number().optional(),
	limit: Joi.number().optional(),
	page: Joi.number().optional()
});