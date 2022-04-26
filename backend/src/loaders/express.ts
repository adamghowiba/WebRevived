import express, { Application } from 'express';
import indexRouter from '@routes/index';
import authRouter from '@routes/Auth';
import websiteRouter from '@routes/Website';
import accountRouter from '@routes/Account';
import portalRouter from '@routes/Portal';
import formRouter from '@routes/Forms';
import userRouter from '@routes/User';
import projectRouter from '@routes/Project';
import logger from '@logger';
import cors from 'cors';
import cookieParser from 'cookie-parser';
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
		this.app.use(cors({ credentials: true }));
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
		this.app.use('/api/auth', authRouter);
		this.app.use('/api/account', accountRouter);
		this.app.use('/api/website', websiteRouter);
		this.app.use('/api/form', formRouter);
		this.app.use('/api/portal', portalRouter);
		this.app.use('/api/user', userRouter);
		this.app.use('/api/project', projectRouter);
		logger.info('API Routes registered sucessfully');
		return this;
	}
}
