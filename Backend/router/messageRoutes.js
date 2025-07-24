import {Router} from 'express'
import { sendMessage, getMessage } from '../controller/messageController.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = Router();

router.post("/", verifyToken, sendMessage);
router.get('/:chatId', verifyToken, getMessage);

export default router;