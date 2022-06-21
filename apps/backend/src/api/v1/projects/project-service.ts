/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@common/db';
import { DatabaseError } from '@errors/DatabaseError';
import { ProjectCreate, ProjectGetAll } from '@type/project-api';
import { transformIdsArray } from '@utils/transforms';

export const getAllProjects = async (query?: ProjectGetAll) => {
	const page = query?.page || 0;
	const limit = query?.limit || 30;

	try {
		const projects = await prisma.project.findMany({
			where: {
				account_id: query?.account_id
			},
			take: limit,
			skip: limit * page
		});

		return projects;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};

export const createProject = async (data: ProjectCreate) => {
	const { name, account_id, description, due_date, type, contact_ids, user_ids } = data;

	const sanitizeConnect = (data: number[]) => {
		if (!data) return undefined;

		return { connect: transformIdsArray(data) };
	};

	try {
		const projects = await prisma.project.create({
			data: {
				name,
				description,
				due_date,
				type,
				account: account_id
					? {
							connect: { id: account_id }
					  }
					: undefined,
				contacts: sanitizeConnect(contact_ids),
				users: sanitizeConnect(user_ids)
			},
			include: { users: true, account: true }
		});

		return projects;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};

/* Unimplemented */
export const updateProject = async (data: unknown) => {};
