import express from 'express';
import bodyParser from 'body-parser';
import { jwtMiddleware, generateAccessToken } from '../helpers/jwt.js';

const router = express.Router();

const routerCart = router
  .get('/:id', jwtMiddleware, (req, res) => {
    // return the cart
  })
  .post('/', bodyParser.json(), (req, res) => {
    // TODO: validate body data with schema
    res.json(generateAccessToken(req.body.username));
  })
  .post(':id/order', jwtMiddleware, (req, res) => {
    // generate an order for the current cart
    // using this order id to use routes in /order
  })
  .patch(':/id', jwtMiddleware, (req, res) => {
    // patch the current cart
  })
  .delete(':/id', jwtMiddleware, (req, res) => {
    // remove the current cart
  });

export default routerCart;
