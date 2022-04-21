import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '@utils/error-utils';
import { websiteService } from '@services';
import ApiError from '@errors/ApiError';
import { websiteQueryPValidation, websiteRequestBody } from '@validation/website-validation';
import { WebsiteGetAllRequest, WebsiteGetQueryParam } from '../../types/website-api';

/* GET All Websites */
export const getAllWebsites = catchAsync(async (req: WebsiteGetAllRequest, res: Response) => {
	const { error } = websiteQueryPValidation.validate(req.query);
	if (error) throw new ApiError(error.message);

	const transformQuery = Object.entries(req.query).reduce(
		(acc, [key, value]) => (acc = { ...acc, [key]: parseInt(value) }),
		{}
	);

	const allWebsites = await websiteService.getAllWebsites(transformQuery);

	return res.json(allWebsites);
});

/* GET Specfic Website */
export const getWebsiteByID = catchAsync(async (req: Request, res: Response) => {
	const websiteId = parseInt(req.body.website_id);

	if (!websiteId) throw new ApiError('website_id is required');

	const website = await websiteService.getWebsiteByID(websiteId);

	res.json(website);
});

/* POST New Website */
export const postWebsite = catchAsync(async (req: Request, res: Response) => {
	const { error } = websiteRequestBody.validate(req.body);
	if (error) throw new ApiError(error.message, 505);

	const accountId = req.body.account_id;
	const createdWebsite = await websiteService.createWebsite(accountId, req.body.url);

	res.json(createdWebsite);
});

/* UPDATE Website */
export const putWebsite = catchAsync(async (req: Request, res: Response) => {});

/* DELETE Website */
export const deleteWebsite = catchAsync(async (req: Request, res: Response) => {});
