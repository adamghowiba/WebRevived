import logger from '@logger';
import { WebClient, LogLevel } from '@slack/web-api';

const token = 'xoxb-1914803120355-3411016895092-qpUDEQRwteXA6Ys6ufHYT0OI';

// const app = new App({
// 	signingSecret: '5385765ba82c409e780ae9d91b7e8522',
// 	clientSecret: '7f2d79251e7a1713bf79f55bf71b5a5b',
// 	token: 'xoxb-1914803120355-3411016895092-qpUDEQRwteXA6Ys6ufHYT0OI'
// });

const slackClient = new WebClient(token);

// slackClient.chat.postMessage({ channel: 'random', text: 'Testing web client' }).then(console.log).catch(console.error);

// export async function init() {
// 	await app.start(6000);

// 	logger.info('Slack Bolt app is running');
// 	// app.client.chat.postMessage({channel: 'general', text: "Hello Slack!"})
// }
