import { Router } from 'express';
const router = Router();

import * as dpaController from '../controllers/dpa.controller';
import * as checkToken from '../middlewares/checkToken';

router.get('/', [checkToken.checkToken], dpaController.getRegiones);
router.get('/:id/comunas', [checkToken.checkToken], dpaController.getComunas);

export default router;