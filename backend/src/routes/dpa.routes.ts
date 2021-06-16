import { Router } from 'express';
const router = Router();

import * as dpaController from '../controllers/dpa.controller';

router.get('/', dpaController.getRegiones);
router.get('/:id/comunas', dpaController.getComunas);

export default router;