import express from 'express';
const router = express.Router();

const routerCart = router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default routerCart;
