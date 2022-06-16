import { authController } from '@controllers';
import { validate } from '@middlewear/validate';
import userValidation from '@validation/user-validation';
import { Router } from 'express';

const router = Router();

router.post('/login', validate(userValidation.loginUser), authController.login);
router.get('/me', authController.me);

export default router;
