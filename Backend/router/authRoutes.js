
import { Router } from 'express'
import {register, login, changePassword} from '../controller/authController.js'
import { verifyToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post("/register", register)
router.post("/login", login);
router.post("/change-password", verifyToken, changePassword);

export default router
