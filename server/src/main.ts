import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRouter } from './controller/user.controller';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});