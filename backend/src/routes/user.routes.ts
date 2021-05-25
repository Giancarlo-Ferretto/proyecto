import { Router } from 'express';
const router = Router();

import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/user.controller'

router.route('/').get(getUsers);
router.route('/').post(postUser);
router.route('/:id').get(getUser);
router.route('/:id').put(putUser);
router.route('/:id').delete(deleteUser);

export default router;