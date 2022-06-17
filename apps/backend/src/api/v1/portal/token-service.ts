import primsa from '@common/db';
import { PortalInvitation } from '@prisma/client';
export const getPortalTokenByContactId = async (contactId: number): Promise<PortalInvitation> => {
	const portalToken = await primsa.portalInvitation.findUnique({
		where: {
			contact_id: contactId
		}
	});

	return portalToken;
};

export const checkPortalToken = async (token: string): Promise<PortalInvitation> => {
	const portalToken = await primsa.portalInvitation.findFirst({
		where: {
			token
		}
	});

	return portalToken;
};
