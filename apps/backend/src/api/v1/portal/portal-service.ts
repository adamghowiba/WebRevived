import prisma from '@common/db';
import { generateToken } from '@utils/token-utils';

export const getAllPortals = async () => {};

export const getPortalByAccountID = async (accountId: number) => {};

export const getPortalUsers = async (accountId: number) => {};

export const createPortal = async (accountId: number) => {
	const portal = await prisma.portal.create({
		data: {
			account: {
				connect: { id: accountId }
			}
		}
	});

	return portal;
};

export const updatePortal = async () => {};

export const deletePortal = async () => {};

/* USER */
export const setPortalContactPassword = async () => {};

export const getPortalContact = async () => {};

export const createPortalContact = async () => {};

export const addContactToPortal = async (portalId: number, contact_id: number) => {
	const portal = await prisma.portal.update({
		where: {
			id: portalId
		},
		data: {
			users: {
				connect: {
					contact_id: contact_id
				}
			}
		}
	});

	return portal;
};

/* TOKEN */
export const sendPortalRequest = async (contactId: number) => {
	const token = generateToken();
	const tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 10);

	const createdToken = await prisma.portalInvitation.create({
		data: {
			token: token,
			expiration_date: tomorrow,
			conatct: {
				connect: {
					id: contactId
				}
			}
		}
	});

	return createdToken;
};
