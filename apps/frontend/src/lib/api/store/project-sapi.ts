import { HOST } from '$lib/constants/config';
import { get, writable } from 'svelte/store';

export interface Project {
	id: number;
	name: string;
	type: string;
	description: string;
	slack_channel: string;
	account_id: string;
	createdAt: Date;
}

const createProjectStore = () => {
	const { set, update, subscribe } = writable<Project[]>(null, () => {
		refresh();
	});

	const getProjects = async () => {
		const response = await fetch(`${HOST}/project`, {
			credentials: 'include'
		});
		const result = await response.json();

		return result;
	};

	const refresh = async () => {
		const projects = await getProjects();
		set(projects);
	};

	return {
		subscribe,
		getProjects,
		refresh
	};
};

export const projectsStore = createProjectStore();
