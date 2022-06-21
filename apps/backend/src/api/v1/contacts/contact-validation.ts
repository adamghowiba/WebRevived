/* eslint-disable @typescript-eslint/no-unused-vars */
import { routeValidation } from '@helpers/validation-helper';
import { Prisma } from '@prisma/client';
import { ContactApi } from '@webrevived/types/contact';
import Joi from 'joi';
import { contactModel } from '../../../validations/contact';
import { z, ZodTypeAny } from 'zod';

const getByIdValidation = routeValidation({
	query: Joi.object<Prisma.ContactInclude>({ account: Joi.boolean(), forms: Joi.boolean(), projects: Joi.boolean() })
});

const postSchema = routeValidation({
	body: Joi.object<ContactApi.PostBody>({
		email: Joi.string().email().required(),
		first_name: Joi.string(),
		last_name: Joi.string().required(),
		phone: Joi.string(),
		title: Joi.string()
	})
});

const putSchema = routeValidation({
	params: Joi.object<ContactApi.ContactIdParam>({
		contact_id: Joi.number()
	}),
	body: postSchema.body?.concat(
		Joi.object<ContactApi.PutInclude>({
			account: Joi.array().items(Joi.number()),
			forms: Joi.array().items(Joi.number()),
			projects: Joi.array().items(Joi.number())
		})
	)
});


type ZodRawShape<T> = {
	[k in keyof T]: z.ZodTypeAny;
};

const zodPutSchemaBody = contactModel.extend<ZodRawShape<ContactApi.PutInclude>>({
	account: z.array(z.number()),
	forms: z.array(z.number()),
	projects: z.array(z.number()),
}).partial().strict();

export default { getByIdValidation, putSchema, zodPutSchemaBody };
