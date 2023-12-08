import express from 'express';
import { signUp,signIn, googleAuth } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.post('/google',googleAuth);
export default router;