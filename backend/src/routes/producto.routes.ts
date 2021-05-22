import { Router } from 'express';
const router = Router();

import { getProductos, postProducto } from '../controllers/producto.controller'

router.route('/')
      .get(getProductos)
      .post(postProducto);

export default router;