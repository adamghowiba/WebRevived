import { Router } from 'express';
import contactController from '@api/v1/contacts/contact-controller';

const router = Router();

/* GET All contacts */
router.get('/', contactController.getAllContacts)

/* GET By Id */
router.get('/:contact_id', contactController.getContactById)

/* POST New contact */
router.post('/', contactController.postContact)

/* POST New contact */
router.put('/:contact_id', contactController.putContact)

export default router;