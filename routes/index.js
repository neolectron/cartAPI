import express from 'express';

import cartRouter from './cart.js';
import orderRouter from './order.js';

const router = express.Router();
router.use('/cart', cartRouter);
router.use('/order', orderRouter);

export default router;
