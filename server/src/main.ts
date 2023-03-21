import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRouter } from './controller/user.controller';
import { pool } from '../db/connection';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});