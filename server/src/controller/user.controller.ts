import express, { Request, Response } from "express";
import { User } from "../application/user/user.interface";
export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  const user = new User();
  const users = await user.findAll();
  res.json(users);
});
userRouter.get('/:id', async (req: Request, res: Response) => {
  const user = new User();
  const id = parseInt(req.params.id);
  const users = await user.findById(id);
  res.json(users);
})
