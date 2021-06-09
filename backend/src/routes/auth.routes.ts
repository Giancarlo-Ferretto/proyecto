import { Router } from 'express';
const router = Router();

import * as authController from '../controllers/auth.controller';
import * as checkSignUp from '../middlewares/checkSignUp';

router.post('/signin', authController.signIn);
router.post('/signup', [checkSignUp.checkDuplicateUser], authController.signUp);

export default router;