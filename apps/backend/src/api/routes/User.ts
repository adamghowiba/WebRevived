import { userController } from '@controllers';
import { requireRole } from '@middlewear/auth-mw';
import { validate } from '@middlewear/validate';
import userValidation from '@validation/user-validation';
import { Router } from 'express';

const router = Router();

router.use(requireRole('ADMIN'));

/* Create New User */
router.post('/', validate(userValidation.createUser), userController.createUser);

export default router;
