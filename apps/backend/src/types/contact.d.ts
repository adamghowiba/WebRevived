import { Prisma } from '@prisma/client';
import { ContactApi } from '@webrevived/types/contact';
import { Request } from 'express';

declare namespace ContactRequest {
	/* Request<Params, ResBody, ReqBody, Query> */
	type GetByIdRequest = Request<ContactApi.ContactIdParam, unknown, unknown, Prisma.ContactInclude>;

	type PutRequest = Request<ContactApi.ContactIdParam, unknown, ContactApi.PutBody, unknown>;
}
