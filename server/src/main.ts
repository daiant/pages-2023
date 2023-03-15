import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send("Daiant's blog server");
});

app.listen(port, () => {
  console.log(`[server]: Server running at http://localhost:${port}`);
})