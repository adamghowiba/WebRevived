import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/hello', (req: Request, res: Response) => {

	res.json('Hello fucking world part 3');
});

export default router;

// 040133161491.dkr.ecr.us-east-1.amazonaws.com/webrevived-backend