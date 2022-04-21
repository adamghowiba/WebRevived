import { projectService } from '@services';
import slackService from '@services/external/slack-service';
import { ProjectGetRequest, ProjectPostRequest } from '@type/project-api';
import { catchAsync } from '@utils/error-utils';
import { transformSlackIds } from '@utils/transforms';
import { Request, Response } from 'express';

export const getAll = catchAsync(async (req: ProjectGetRequest, res: Response) => {
	const projects = await projectService.getAllProjects({ ...req.query });
	return res.json(projects);
});

export const getByID = catchAsync(async (req: Request, res: Response) => {
	/* TODO: Unimplemented */
	return res.json('id');
});

export const post = catchAsync(async (req: ProjectPostRequest, res: Response) => {
	const project = await projectService.createProject(req.body);

	const channel = await slackService.createChannelAndInvite(project.name, transformSlackIds(project.users));
	await slackService.broadcastNewProject(`New Project Incoming [${project.name}] 🚀`, project, channel.channel.id);

	return res.json(project);
});
