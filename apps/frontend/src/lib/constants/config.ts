export const HOST_SUFFIX = '/api';

export const HOSTS = {
	dev: `http://localhost:5000${HOST_SUFFIX}`,
	staging: `https://api.saber.dev/api`,
	pord: `https://api.webrevived.com${HOST_SUFFIX}`
};

const CONFIG = {
	nodeEnv: process.env.NODE_ENV,
	isProd: process.env.NODE_ENV === 'production',
	isStaging: process.env.NODE_ENV === 'staging',
	isDev: process.env.NODE_ENV === 'development'
};


export const HOST = HOSTS[CONFIG.isProd ? 'prod' : CONFIG.isStaging ? 'staging' : 'dev'];
