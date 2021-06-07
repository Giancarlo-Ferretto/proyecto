import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/user.controller'

router.route('/').post(userController.createUser);
router.route('/').get(userController.getUsers);
router.route('/:id').get(userController.getUserById);
router.route('/:id').put(userController.updateUserById);
router.route('/:id').delete(userController.deleteUserById);

export default router;