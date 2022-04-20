import { Router } from 'express';
import { portalController } from '@controllers';

const router = Router({ mergeParams: true });

/* GET All Forms */
router.get('/', );

/* GET Specfic Form */
router.get('/:id', );

/* POST New Form */
router.post('/', portalController.postPortal);

/* POST New Form Submission */
router.post('/:id',);

/* UPDATE Form */
router.put('/:id',);

/* DELETE Form */
router.delete('/:id',);


/* Portal User */
router.route('/:id/user').put(portalController.putContactToPortal)

router.post('/:id/request', portalController.sendPortalRequest)

router.get('/verify', portalController.verifyPortalSignup)

export default router;
