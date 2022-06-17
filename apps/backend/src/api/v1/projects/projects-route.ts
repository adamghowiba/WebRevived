import projectValidation from '@api/v1/projects/project-validation';
import projectController from '@api/v1/projects/project-controller';
import { validate } from '@middlewear/validate';
import { Router } from 'express';

const router = Router();

// router.use(requireRole('ADMIN'));

/* Get All Projects */
router.get('/', validate(projectValidation.getProjects), projectController.getAll);

/* Get Project By ID */
router.get('/:project_id', projectController.getByID);

/* Create New Project */
router.post('/', validate(projectValidation.createProject), projectController.post);

/* Update Project */
router.put('/:project_id');

/* Delete Project */
router.delete('/:project_id');

export default router;
