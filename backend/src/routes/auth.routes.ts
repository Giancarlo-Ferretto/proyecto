import { Router } from 'express';
const router = Router();

import * as authController from '../controllers/auth.controller'

router.route('/signin').post(authController.signIn);
router.route('/signup').post(authController.signUp);

export default router;