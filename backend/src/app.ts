import express, { NextFunction, Request, Response } from 'express';
import { connectDb } from '@controllers/db-controller';
import { errorHandler } from '@middlewear';
import logger from '@logger';
import config from '@config';
import http from 'http';
import ExpressInitialization from './loaders/express';
import { DatabaseError } from '@errors/DatabaseError';
import ICustomError from '@errors/ICustomError';
import '@services/slack-service';

const app = express();
const server = http.createServer(app);

process.on('unhandledRejection', (reason: string) => {
	logger.warn(`Unhandled promise ${reason}`);
	throw reason;
});

/* Setup Database Connection */
connectDb().then(logger.info).catch(logger.error);

/* Initlize Express Application */
new ExpressInitialization(app).registerCors().registerParsers().registerSessions().registerRoutes();

/* Error Handleing */
app.use(errorHandler.notFoundError);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof DatabaseError) {
		const { status, statusCode, message } = err;
		return res.status(err.statusCode).json({ status, message, statusCode });
	}

	if (err instanceof ICustomError && process.env.NODE_ENV === 'development') {
		console.log('CUSTOM ERROR HAPPENED');
		const { message, stack, isOperational, status } = err;
		logger.error(`${err.status}: ${err.message}`);
		return res.status(err.statusCode).json({ status, message, isOperational, stack });
	}

	return res.status(400).json({ ...err });
});

/* Lights, Camera, Action. */
server.listen(config.port, () => {
	logger.info(`Loaded app sucessfully on port ${config.port}`);
});

export default app;
