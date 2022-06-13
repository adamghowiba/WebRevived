// import { authController } from '@controllers';
import { Router } from 'express';
import { accountController } from '@controllers';
import { requireRole } from '@middlewear/auth-mw';
import { validate } from '../middlewears/validate';
import accountValidation from '@validation/account-validation';

const router = Router({ mergeParams: true });

router.use(requireRole('ADMIN'));

/* GET All Accounts */
router.get('/', accountController.getAllAccounts);

/* GET Specfic Account */
router.get('/:account_id', accountController.getAccountByID);

/* POST New Account */
router.post('/', validate(accountValidation.createProject), accountController.postAccount);

/* UPDATE Account */
router.put('/:account_id', accountController.putAccount);

/* DELETE Account */
router.delete('/:account_id', accountController.deleteAccount);

export default router;
