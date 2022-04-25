import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/api/hello', (req: Request, res: Response) => {

	res.json('Latest change with first auto deploy');
});

/* GET home page. */
router.get('/api', (req: Request, res: Response) => {

	res.status(200).json('Web Revived Core API v0.1.1 BETA')
});


router.get('/', (req: Request, res: Response) => {
	res.status(200).json('Web Revived Core API v0.1.1 BETA')
});


export default router;

// 040133161491.dkr.ecr.us-east-1.amazonaws.com/webrevived-backend

/* Last push: April 22, 2022, 11:27:35 (UTC+04)) */