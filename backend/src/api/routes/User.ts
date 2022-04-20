import { userController } from "@controllers";
import { requireRole } from "@middlewear/auth-mw";
import { UserRole } from "@prisma/client";
import { Router } from "express";
import { deprecate } from "util";

const router = Router();

router.use(requireRole('ADMIN'));

/* Create New User */
router.post('/', userController.createUser);

export default router;