import dotenv from 'dotenv';

dotenv.config();

// if (envFound.error) {
// console.log('ENV not found');
// throw new Error("⚠️  Couldn't find .env file  ⚠️");
// }

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

export default {
	port: parseInt(process.env.PORT, 10) || 5000,
	nodeEnv: process.env.NODE_ENV || 'development',
	isProduction: process.env.NODE_ENV === 'production',
	isDevelopment: process.env.NODE_ENV === 'development',
	prodDatabaseURL: process.env.DATABASE_URL,
	devDatabaseURL: process.env.DEVELOPMENT_DATABASE_URL,
	shadowDatabseUrl: process.env.SHADOW_DATABASE_URL,
	slack_token: process.env.SLACK_TOKEN,
	clickup_token: process.env.CLICKUP_TOKEN,
	logs: {
		level: process.env.LOG_LEVEL || 'warn'
	},
	api: {
		prefix: '/api'
	}
};
