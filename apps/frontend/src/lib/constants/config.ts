export const HOST_SUFFIX = '/api';

export const HOSTS: {[env in NodeEnv]: string} = {
	development: `http://localhost:5000${HOST_SUFFIX}`,
	staging: `https://api.saber.dev/api`,
	production: `https://api.webrevived.com${HOST_SUFFIX}`
};

type NodeEnv = 'production' | 'staging' | 'development';

const CONFIG = {
	nodeEnv: process.env.NODE_ENV as NodeEnv,
	isProd: process.env.NODE_ENV === 'production',
	isStaging: process.env.NODE_ENV === 'staging',
	isDev: process.env.NODE_ENV === 'development'
};
	

export const HOST = HOSTS[CONFIG.nodeEnv ?? "development"];
