import prisma from '@controllers/db-controller';
import { WebsiteGetQueryParam } from '@type/website-api';

/* GET All Website */
export const getAllWebsites = async (params?: WebsiteGetQueryParam<number>) => {
	const limit = params?.limit || 30;
	const page = params?.page || 0;
	const accountId = params?.account_id;

	const websites = await prisma.website.findMany({
		where: accountId
			? {
					account_id: { equals: accountId }
			  }
			: undefined,
		skip: page * limit,
		take: limit
	});

	return websites;
};

/* GET Specfic Website */
export const getWebsiteByID = async (id: number) => {
	const website = await prisma.website.findUnique({
		where: {
			id
		}
	});

	return website;
};

export const getWebsitesByAccount = async (accountId: number) => {
	const website = await prisma.account.findUnique({
		where: {
			id: accountId
		},
		select: {
			website: true
		}
	});

	return website;
};

/* POST New Website */
export const createWebsite = async (accountId: number, url: string) => {
	const websiteCreated = await prisma.website.create({
		data: {
			account_id: accountId,
			url
		}
	});

	return websiteCreated;
};

/* UPDATE Website */
export const updateWebsite = async () => {};

/* DELETE Website */
export const deleteWebsite = async () => {};
