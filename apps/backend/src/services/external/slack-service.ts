/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import config from '@config';
import { Account, Project, User } from '@prisma/client';
import { LogLevel, WebClient } from '@slack/web-api';
import slackBlocks from '@utils/slack-blocks';
import { slugify } from '@utils/transforms';

export const slackClient = new WebClient(config.slack_token, { logLevel: LogLevel.DEBUG });

type ProjectReturn = Project & {
	users: User[];
	account: Account;
};

const createChannelAndInvite = async (name: string, slackIds: string[]) => {
	try {
		const channel = await slackClient.conversations.create({ name: slugify(name) });
		if (!slackIds.length) return channel;

		// @ts-ignore
		await slackClient.conversations.invite({ channel: channel.channel.id, users: slackIds.toString() });
		return channel;
	} catch (error: any) {
		throw error;
	}
};

// ? Long function, should we make this a little more pure?
const broadcastNewProject = async (title: string, project: ProjectReturn, projectChannel?: string) => {
	const transformedData: any = {
		Description: project?.description || 'Unset',
		Type: project.type,
		'Due Date': project?.due_date?.toLocaleDateString('en-us', { dateStyle: 'short' }) || 'Unset',
		Channel: `<#${projectChannel || 'general'}>`
	};

	if (project.users.length) {
		transformedData['Assigned'] = project?.users
			.map(user => user?.slack_uid ? `<@${user?.slack_uid}>` : user.first_name)
			.join(', ');
	}

	const strigifyData = Object.entries(transformedData).reduce(
		//@ts-ignore
		(acc, [key, value]) => (acc += `*${key}*: ${value?.toString()} \n`),
		''
	);

	const response = await slackClient.chat.postMessage({
		channel: 'general',
		text: 'New project alert!',
		blocks: slackBlocks.newProjectBlock(title, strigifyData)
	});

	return response;
};

/**
 * @deprecated
 */
const notifyProjectMembers = (slackIds: string[]) => {
	slackIds.forEach(id => {
		slackClient.chat.postMessage({ channel: id, text: 'Youve been asigned to a new project' });
	});
};

export default { broadcastNewProject, createChannelAndInvite };
