import { Request, Response, Router } from 'express';
import authRouter from '@api/v1/auth/auth-route';
import websiteRouter from '@api/v1/websites/website-route';
import accountRouter from '@api/v1/accounts/account-route';
import portalRouter from '@api/v1/portal/portal-route';
import formRouter from '@api/v1/forms/form-route';
import userRouter from '@api/v1/users/user-route';
import projectRouter from '@api/v1/projects/projects-route';
import '@services/aws/sns-service';

const router = Router();

router.use('/api/auth', authRouter);
router.use('/api/account', accountRouter);
router.use('/api/website', websiteRouter);
router.use('/api/form', formRouter);
router.use('/api/portal', portalRouter);
router.use('/api/user', userRouter);
router.use('/api/project', projectRouter);

/* GET home page. */
router.get('/api/hello', (req: Request, res: Response) => {
	res.json(req.body);
});

router.get('/', (req: Request, res: Response) => {
	res.status(200).json(`Web Revived Core API BETA ${process.env.npm_package_version}`);
});

/* GET home page. */
router.get('/api', (req: Request, res: Response) => {
	res.status(200).json(`Web Revived Core API BETA ${process.env.npm_package_version}]`);
});

export default router;
