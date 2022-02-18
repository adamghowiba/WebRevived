import { sendEmail, sendFormEmail } from '@services/email-service';
import { Router, Request, Response } from 'express';

const router = Router();

/* GET home page. */
router.get('/email', async (req: Request, res: Response) => {
	const email = await sendFormEmail(['adamware99@hotmail.com'], req.body);
	res.send('Email sent')
});

export default router;
