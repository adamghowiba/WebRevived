import { Request } from 'express';

export interface WebsiteGetQueryParam<T = string> {
	account_id?: T;
	limit?: T;
	page?: T;
}

export type WebsiteGetAllRequest = Request<any, any, any, WebsiteGetQueryParam>;
