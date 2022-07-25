import indexRouter from '@api/v1/index';
import logger from '@logger';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import session from './session';

export default class App {
	readonly app: Application;

	/**
	 * @param app Express Application
	 * Provides functions related to the setup process of express.
	 */
	constructor(app: Application) {
		this.app = app;
	}

	registerCors() {
		this.app.use(
			cors({
				origin: (req, callback) => {
					callback(null, req);
				},
				credentials: true
			})
		);
		return this;
	}

	registerParsers() {
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cookieParser());
		return this;
	}

	registerSessions() {
		this.app.use(session);
		logger.info('Sessions have been initialized');
		return this;
	}

	registerRoutes() {
		this.app.use('/', indexRouter);
		logger.info('API Routes registered sucessfully');
		return this;
	}
}
