import 'dotenv/config';
import express from 'express';
import router from './routes/index.js';

const app = express();
app.use(router);

app.listen(process.env.PORT, () =>
  console.info(`[START] listening on port ${process.env.PORT}!`)
);
