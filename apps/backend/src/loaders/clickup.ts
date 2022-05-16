import { Clickup } from '@type/clickup/clickup';

interface ClickUpData {
	spaces: Clickup.Space[];
	folders: {
		active: string;
		pending: string;
	};
}

const DATA = {
	teamId: '8693230',
	space: {
		project: '14789346'
	},
	folder: {
		pending: '85543288',
		active: '39970705',
		completed: '33698655'
	}
};

export default { DATA };
