import { sendEmail, sendFormEmail } from '@services/email-service';
import { Router, Request, Response } from 'express';

const router = Router();

/* GET home page. */
router.get('/email', async (req: Request, res: Response) => {
	const email = req.query.email as string;
});

export default router;
