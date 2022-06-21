/* eslint-disable @typescript-eslint/require-await */
import { projectService } from '@services';
import slackService from '@services/external/slack-service';
import { ProjectGetRequest, ProjectPostRequest } from '@type/project-api';
import { catchAsync } from '@utils/error-utils';
import { transformSlackIds } from '@utils/transforms';
import { Request, Response } from 'express';
import ApiError from '../../../errors/ApiError';

export const getAll = catchAsync(async (req: ProjectGetRequest, res: Response) => {
	const projects = await projectService.getAllProjects({ ...req.query });
	return res.json(projects);
});

export const getByID = catchAsync(async (req: Request, res: Response) => {
	/* TODO: Unimplemented */
	res.json('id');
});

export const post = catchAsync(async (req: ProjectPostRequest, res: Response) => {
	const project = await projectService.createProject(req.body);
	if (!project) throw new ApiError('Failed to create project');

	// Create slack channel & invite assigned users
	const channel = await slackService.createChannelAndInvite(project.name, transformSlackIds(project.users));
	
	//@ts-ignore
	await slackService.broadcastNewProject(`New Project Incoming [${project.name}] 🚀`, project, channel.channel.id);

	// Create clickup list
	// TODO: Add Back in
	// const list = await clickupService.createList(clickup.DATA.folder.pending, {
	// 	name: project.name,
	// 	content: project.description
	// });

	// logger.info(`Created slack channel ${list.name}`);

	return res.json(project);
});

export default { getAll, getByID, post };
