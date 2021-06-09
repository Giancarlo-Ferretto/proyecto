import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/user.controller'
import * as checkToken from '../middlewares/checkToken';

router.post('/', [checkToken.checkToken, checkToken.isAdmin], userController.createUser);
router.get('/', [checkToken.checkToken, checkToken.isAdmin], userController.getUsers);
router.get('/:id', [checkToken.checkToken, checkToken.isAdmin], userController.getUserById);
router.put('/:id', [checkToken.checkToken, checkToken.isAdmin], userController.updateUserById);
router.delete('/:id', [checkToken.checkToken, checkToken.isAdmin], userController.deleteUserById);

export default router;