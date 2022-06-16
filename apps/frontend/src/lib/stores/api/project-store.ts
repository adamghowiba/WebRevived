import type { Project } from '$lib/api/store/project-sapi';
import { getProjects } from '$lib/api/project-api';
import { createAsyncStore } from '$lib/stores/async-store';

export const asyncProjectStore = createAsyncStore<Project[]>([], () => {
	return getProjects();
});
