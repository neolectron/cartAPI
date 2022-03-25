import express from 'express';
import bodyParser from 'body-parser';
import { jwtMiddleware } from '../helpers/jwt.js';

const router = express.Router();

const routerOrder = router.get('/:id', jwtMiddleware, (req, res) => {
  // return the order generated from the cart
});

export default routerOrder;
