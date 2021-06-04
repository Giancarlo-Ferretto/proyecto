import { Router } from 'express';
const router = Router();

import { getClients, getClient, postClient, putClient, deleteClient } from '../controllers/client.controller'

router.route('/').get(getClients);
router.route('/').post(postClient);
router.route('/:id').get(getClient);
router.route('/:id').put(putClient);
router.route('/:id').delete(deleteClient);

export default router;