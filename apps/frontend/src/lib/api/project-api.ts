import { HOST } from '$lib/constants/config';

export const getProjects = async () => {
	const response = await fetch(`${HOST}/project`, {
		credentials: 'include'
	});
	const result = await response.json();

	return result;
};
