/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { NextFunction, Request, Response } from 'express';
import { connectDb } from '@controllers/db-controller';
import { errorHandler } from '@middlewear';
import { DatabaseError } from '@errors/DatabaseError';
import logger from '@logger';
import http from 'http';
import config from '@config';
import ICustomError from '@errors/ICustomError';
import ExpressInitialization from './loaders/express';
// import '@services/slack-service';
import './events/core';

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
		const { message, stack, isOperational, status } = err;
		logger.error(`${err.status}: ${err.message}`);
		return res.status(err.statusCode).json({ status, message, isOperational, stack });
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return res.status(400).json({ error: err?.message, is_unknown: true });
});

/* Lights, Camera, Action. */
server.listen(config?.port || 5000, () => {
	logger.info(`Loaded app sucessfully on port ${config?.port || 500}`);
});

export default app;
