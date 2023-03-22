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
});

userRouter.post('/save', async (req: Request, res: Response) => {
  const user = new User();
  try {
    const ok = await user.save(req.body.user);
    res.send("i hope for the best!");
  } catch (error: any) {
    res.status(500).send(error);
  }
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const user = new User();
  try {
    const id = parseInt(req.params.id);
    await user.destroy(id);
    res.status(200).send('DELETED!');
  } catch (error: any) {
    res.status(500).send(error);
  }
})
