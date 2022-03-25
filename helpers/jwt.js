import jwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';

const generateAccessToken = (username) =>
  jsonwebtoken.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '1800s',
  });

const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

export { jwtMiddleware, generateAccessToken };
