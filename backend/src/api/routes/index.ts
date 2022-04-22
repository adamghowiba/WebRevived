import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/hello', (req: Request, res: Response) => {

	res.json('The latest, of the latest test. Take 4000.');
});


export default router;

// 040133161491.dkr.ecr.us-east-1.amazonaws.com/webrevived-backend

/* Last push: April 22, 2022, 10:54:42 (UTC+04) */