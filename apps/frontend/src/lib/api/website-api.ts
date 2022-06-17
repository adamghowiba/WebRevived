import { HOST } from '$lib/constants/config';
import type { Website } from '@webrevived/types/prisma';

export const getWebsites = async (): Promise<Website[]> => {
	const result = await fetch(`${HOST}/website`, { credentials: 'include' });
	const response = await result.json();

	if (!result.ok) throw new Error(response);

	return response;
};

// const putWebsite = async () => {
//     const result = await fetch(`${HOST}/website`, {
//         method: "put",
//         credentials: "include",
//     })
//     const response = result.json();

//     console.debug(response);
// }

export default { getWebsites };
