import express, { Application } from 'express';
import indexRouter from '@api/v1/index';
import authRouter from '@api/v1/auth/auth-route';
import websiteRouter from '@api/v1/websites/website-route';
import accountRouter from '@api/v1/accounts/account-route';
import portalRouter from '@api/v1/portal/portal-route';
import formRouter from '@api/v1/forms/form-route';
import userRouter from '@api/v1/users/user-route';
import projectRouter from '@api/v1/projects/projects-route';
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
		this.app.use(cors({ origin: ['http://localhost:3000', '*'], credentials: true }));
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
