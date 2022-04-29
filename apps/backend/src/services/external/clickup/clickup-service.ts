/* eslint-disable max-classes-per-file */
import config from '@config';
import { Clickup } from '@type/clickup/clickup';
import ClickUpRequest from './clickup-request';

class ClickUpService {
	token: string;
	request: ClickUpRequest;
	teamId: string;

	/* TODO LVL 1: Abstract values like team id into a databsae
		than fill in memory object with relevent values like spaces,
		folders, etc.
	*/
	constructor(token: string, teamId?: string) {
		this.token = token;
		this.teamId = teamId || '8693230';

		this.request = new ClickUpRequest(token);
	}

	/* SPACES */
	async getSpaces() {
		const response = await this.request.get<Clickup.Space[]>(`/team/${this.teamId}/space`);
		return response;
	}

	async getSpace(spaceId: string) {
		const response = await this.request.get<Clickup.Space>(`/space/${spaceId}`);
		return response;
	}

	/* FOLDERS */
	async getFolders(spaceId: string) {
		const response = await this.request.get<Clickup.Folder[]>(`/space/${spaceId}/folder`);
		return response;
	}

	/* LISTS */
	async getLists(folderId: string) {
		const response = await this.request.get<Clickup.List[]>(`/folder/${folderId}/list`);
		return response;
	}

	async createList(folderId: string, data: Clickup.CreateList) {
		const response = await this.request.post<Clickup.CreateList>(`/folder/${folderId}/list`, data);
		return response;
	}
}

const clickupClient = new ClickUpService(config.clickup_token);
export default clickupClient;
