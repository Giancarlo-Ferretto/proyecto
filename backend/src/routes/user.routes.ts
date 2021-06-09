import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/user.controller'
import * as checkToken from '../middlewares/checkToken';

router.post('/', [checkToken.checkToken], userController.createUser);
router.get('/', [checkToken.checkToken], userController.getUsers);
router.get('/:id', [checkToken.checkToken], userController.getUserById);
router.put('/:id', [checkToken.checkToken], userController.updateUserById);
router.delete('/:id', [checkToken.checkToken], userController.deleteUserById);

export default router;