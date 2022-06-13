import { userController } from '@controllers';
import { requireRole } from '@middlewear/auth-mw';
import { validate } from '@middlewear/validate';
import userValidation from '@validation/user-validation';
import { Router } from 'express';

const router = Router();

// TODO: Add back in, removed because frontend was giving login issues
// router.use(requireRole('ADMIN'));

/* Create New User */
router.post('/', validate(userValidation.createUser), userController.createUser);

/*Get All Users */
router.get('/', userController.getAllUsers);

export default router;
