import { Request, Response, Router } from 'express';
import '@services/aws/sns-service';
const router = Router();

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
