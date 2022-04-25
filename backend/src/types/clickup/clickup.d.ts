export namespace Clickup {
	export interface CreateList {
		name: string;
		content: string;
		due_date?: string;
		priorty?: number;
		assignee?: number;
		status?: string;
	}

	export interface List {
		id: string;
		name: string;
		orderindex: string;
		content: string;
		status: { status: string; color: string; hide_label: boolean };
		priorty: { priority: string; color: string };
		assignee: unknown;
		task_count: string;
		folder: { id: string; name: string; hidden: boolean; access: boolean };
		space: { id: string; name: string; acess: boolean };
		archived: boolean;
		override_statuses: boolean;
	}

    /* SPACE */
	export interface SpaceStatus {
		status: string;
		type: 'open' | 'closed';
		orderindex: number;
		color: string;
	}

	export interface Space {
		id: string;
		name: string;
		private: boolean;
		statuses: SpaceStatus;
		multiple_assignees: boolean;
		features: unknown;
	}

	export interface GetSpacesResponse {
		spaces: Space[];
	}


    /* FOLDER */
	export interface Folder {
		id: string;
		name: string;
		orderindex: string;
		override_statuses: boolean;
		hidden: boolean;
		space: { id: string; name: string; access: boolean };
		task_count: string;
		lists: unknown;
	}
}
