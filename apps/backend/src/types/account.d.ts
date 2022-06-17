import { Prisma } from '@prisma/client';
import { AccountApi as AccountType } from '@webrevived/types/account';
import { Request } from 'express';

export interface Address {
	street: string;
	city: string;
	state: string;
	code: string;
	country: string;
}

/* TODO Change all routes to reflect this structure */
declare namespace AccountRequest {
	/* GET ACCOUNT */
	type GetQueryParams = Prisma.AccountInclude;
	type GetRequest = Request<AccountType.GetParams, unknown, unknown, GetQueryParams>;

	/* PUT ACCOUNT */
	type PutRequest = Request<AccountType.GetParams, unknown, AccountType.PutBody, unknown>;
}
