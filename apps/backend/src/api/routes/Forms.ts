// import { authController } from '@controllers';
import { formController } from '@controllers';
import { requireRole } from '@middlewear/auth-mw';
import { Router } from 'express';

const router = Router({ mergeParams: true });

/* POST New Form Submission */
router.post('/:formId/submissions', formController.postFormSubmission);

router.use(requireRole('ADMIN'));

/* GET All Forms */
router.get('/', formController.getAllForms);

/* GET Specfic Form */
router.get('/:id', formController.getFormByID);

/* GET Form Submissions */
router.get('/:id/submissions', formController.getFormSubmissions);

/* POST New Form */
router.post('/:websiteId', formController.postForm);

/* UPDATE Form */
router.put('/:id', formController.putForm);

/* DELETE Form */
router.delete('/:id', formController.deleteForm);

export default router;