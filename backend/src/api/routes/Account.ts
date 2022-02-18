// import { authController } from '@controllers';
import { Router } from 'express';
import { accountController } from '@controllers';

const router = Router();

/* GET All Accounts */
router.get('/', accountController.getAllAccounts);

/* GET Specfic Account */
router.get('/', accountController.getAccountByID);

/* POST New Account */
router.post('/', accountController.postAccount);

/* UPDATE Account */
router.put('/', accountController.putAccount);

/* DELETE Account */
router.delete('/', accountController.deleteAccount);


export default router;
