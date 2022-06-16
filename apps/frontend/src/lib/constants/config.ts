export const HOST_SUFFIX = '/api';

export const HOSTS = {
	dev: `http://localhost:5000${HOST_SUFFIX}`,
	pord: `https://api.webrevived.com${HOST_SUFFIX}`
};

const CONFIG = {
	nodeEnv: process.env.NODE_ENV,
	isProd: process.env.NODE_ENV === 'production',
	isDev: process.env.NODE_ENV === 'development'
};


export const HOST = HOSTS[CONFIG.isProd ? 'prod' : 'dev'];
