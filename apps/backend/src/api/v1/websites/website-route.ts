// import { authController } from '@controllers';
import { Router } from 'express';
import websiteController from '@api/v1/websites/website-controller';
import { requireRole } from '@middlewear/auth-mw';

const router = Router({ mergeParams: true });

router.use(requireRole('ADMIN'));

/* GET All Website */
router.get('/', websiteController.getAllWebsites);

/* GET Specfic Website */
router.get('/:website_id', websiteController.getWebsiteByID);

/* POST New Website */
router.post('/', websiteController.postWebsite);

/* UPDATE Website */
router.put('/', websiteController.putWebsite);

/* DELETE Website */
router.delete('/', websiteController.deleteWebsite);

export default router;
