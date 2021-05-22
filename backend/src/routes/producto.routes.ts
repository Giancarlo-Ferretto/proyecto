import { Router } from 'express';
const router = Router();

import { getProductos, getProducto, postProducto, putProducto, deleteProducto } from '../controllers/producto.controller'

router.route('/')
      .get(getProductos)
      .post(postProducto);

router.route('/:id')
      .get(getProducto)
      .delete(deleteProducto)
      .put(putProducto);

export default router;