
import { Router } from 'express'
import {register, login, changePassword, getCurrentUser} from '../controller/authController.js'
import { verifyToken } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/multerMiddleware.js';

const router = Router();

router.post("/register", 
    upload.single('avatar')
    , register)
router.post("/login", login);
router.get("/current-user", verifyToken, getCurrentUser)
router.post("/change-password", verifyToken, changePassword);

export default router
