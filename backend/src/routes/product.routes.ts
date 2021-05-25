import { Router } from 'express';
const router = Router();

import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from '../controllers/product.controller'

router.route('/').get(getProducts);
router.route('/').post(postProduct);
router.route('/:id').get(getProduct);
router.route('/:id').put(putProduct);
router.route('/:id').delete(deleteProduct);

export default router;