import { Account, Prisma } from '@prisma/client';
import { Request } from 'express';
import { User } from '../../../frontend/src/lib/types/user';

export interface Address {
	street: string;
	city: string;
	state: string;
	code: string;
	country: string;
}

/* TODO Change all routes to reflect this structure */
declare namespace AccountApi {
	/* GET ACCOUNT */
	type GetQueryParams = Prisma.AccountInclude;
	interface AccountParams {
		account_id: string;
	}
	type GetRequest = Request<AccountParams, unknown, unknown, GetQueryParams>;

	interface PutInclude {
		users?: number[];
		projects?: number[];
	}
	type PutBody = Partial<Account> & PutInclude;
	type PutRequest = Request<AccountParams, unknown, PutBody, unknown>;
}
