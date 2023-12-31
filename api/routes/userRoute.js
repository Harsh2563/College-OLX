import express from 'express';
import { deleteUser, updateUser } from '../controllers/userController.js';
import { verifyUser } from '../middleware/verifyToken.js';


const router = express.Router();

router.post('/update/:id',verifyUser,updateUser);
router.delete('/delete/:id',verifyUser,deleteUser);

export default router;