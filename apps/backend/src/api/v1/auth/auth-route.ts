import authController  from '@api/v1/auth/auth-controller';
import { validate } from '@middlewear/validate';
import userValidation from '@api/v1/users/user-validation';
import { Router } from 'express';

const router = Router();

router.post('/login', validate(userValidation.loginUser), authController.login);
router.get('/me', authController.me);

export default router;
