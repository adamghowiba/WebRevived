import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/api/hello', (req: Request, res: Response) => {
	res.json('Latest change with first auto deploy');
});

router.get('/', (req: Request, res: Response) => {
	res.status(200).json(`Web Revived Core API BETA ${process.env.npm_package_version}`);
});

/* GET home page. */
router.get('/api', (req: Request, res: Response) => {
	res.status(200).json(`Web Revived Core API BETA ${process.env.npm_package_version}]`);
});

export default router;
