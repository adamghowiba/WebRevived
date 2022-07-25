import { HOST } from '$lib/constants/config';
import type { Project } from '@webrevived/types/prisma';

const getProjects = async (): Promise<Project[]> => {
	const response = await fetch(`${HOST}/project`, {
		credentials: 'include'
	});
	const result = await response.json();

	if (!response.ok) {
		throw new Error(result?.message || 'Failed to fetch projects');
	}

	return result;
};

export default { getProjects };
