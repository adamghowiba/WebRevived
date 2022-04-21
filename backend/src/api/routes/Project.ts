import { projectController } from '@controllers';
import { requireRole } from '@middlewear/auth-mw';
import { validate } from '@middlewear/validate';
import projectValidation from '@validation/project-validation';
import { Router } from 'express';

const router = Router();

router.use(requireRole('ADMIN'));

/* Get All Projects */
router.get('/', validate(projectValidation.createProject), projectController.getAll);

/* Get Project By ID */
router.get('/:project_id', projectController.getByID);

/* Create New Project */
router.post('/', validate(projectValidation.createProject), projectController.post);

/* Update Project */
router.put('/:project_id');

/* Delete Project */
router.delete('/:project_id');

export default router;
