import { EventEmitter } from 'events';

export const EVENTS = {
	PROJECT_CREATED: 'project:created',
	PROJECT_STATUS_CHANGE: 'project:status-change',
	USER_CREATED: 'user:created'
};

export const coreEmit = new EventEmitter();

coreEmit.on(EVENTS.PROJECT_CREATED, (data: string) => {
	console.log('Project added', data);
});
