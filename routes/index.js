import express from 'express';
import cartRouter from './cart.js';

const router = express.Router();
router.use('/cart', cartRouter);

export default router;
