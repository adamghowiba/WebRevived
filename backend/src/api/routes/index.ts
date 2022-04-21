import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/hello', (req: Request, res: Response) => {

	res.json('Were live baby!');
});

export default router;

// 040133161491.dkr.ecr.us-east-1.amazonaws.com/webrevived-backend