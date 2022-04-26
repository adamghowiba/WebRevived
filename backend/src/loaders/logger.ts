import { format, transports, createLogger } from 'winston';
import config, { isProduction } from '@config';

const { combine, timestamp, printf, simple, cli } = format;

const formatedDate = new Date().toLocaleDateString('en-us', { dateStyle: 'medium' });
const productionLogOutput = printf(info => `${formatedDate} - ${info.level.toUpperCase()}: ${info.message}`);

const stageOptions = {
	production: {
		format: combine(timestamp({ format: 'MM/DD HH:mm' }), productionLogOutput),
		transports: [new transports.Console({ level: config.logs.level })]
	},
	development: {
		format: simple(),
		transports: [new transports.Console({ format: cli() })]
	}
};

const logger = createLogger({
	level: config.logs.level,
	exitOnError: false,
	format: isProduction ? stageOptions.production.format : stageOptions.development.format,
	transports: [
		...stageOptions[isProduction ? 'production' : 'development'].transports,
		new transports.File({ filename: 'error.log', level: 'error' }),
		new transports.File({ filename: 'general.log' })
	]
});

export default logger;
