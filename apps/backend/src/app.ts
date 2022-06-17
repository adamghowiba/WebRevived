/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import config from '@config';
import { connectDb } from '@common/db';
import { DatabaseError } from '@errors/DatabaseError';
import ICustomError from '@errors/ICustomError';
import UnknownError from '@errors/UnknownError';
import logger from '@logger';
import { errorHandler } from '@middlewear';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import ExpressInitialization from './loaders/express';
// import '@services/slack-service';

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

/* Error Handeling */
app.use(errorHandler.notFoundError);
app.use((err: Error | DatabaseError | ICustomError, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof DatabaseError) {
		const { status, statusCode, message } = err;
		return res.status(err.statusCode).json({ status, message, statusCode });
	}

	if (err instanceof ICustomError) {
		const { message, stack, isOperational, status } = err;
		logger.error(`${err.status}: ${err.message}`);
		return res.status(err.statusCode).json({ status, message, isOperational, stack });
	}

	if (err instanceof UnknownError) {
		return res.status(400).json({ ...err, is_unknown: true });
	}

	return res.status(400).json({ statusCode: err?.name, error: err?.message, is_unknown: true });
});

/* Lights, Camera, Action. */
server.listen(config.port || 5000, () => {
	logger.info(`Loaded app sucessfully on port ${config.port || 500}`);
});

export default app;
