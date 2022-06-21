import projectApi from '$lib/api/project-api';
import { createAsyncStore } from '$lib/stores/async-store';
import type { Project } from '@webrevived/types/prisma';

export const asyncProjectStore = createAsyncStore<Project[]>([], () => {
	return projectApi.getProjects();
});
