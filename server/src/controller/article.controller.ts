import express, { Request, Response } from 'express';
import { Article } from '../application/article.interface';
export const articleRouter = express.Router();
const article = new Article();

articleRouter.get('/', async (req: Request, res: Response) => {
  try {
    const articles = await article.findAll();
    res.json(articles);
  } catch (error: any) {
    res.status(500).send(error);
  }
});

articleRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const articles = await article.findById(id);
    res.json(articles);
  } catch (error: any) {
    res.status(500).send(error);
  }
});

articleRouter.post('/', async (req: Request, res: Response) => {
  try {
    const ok = await article.save(req.body.article);
    res.send(ok);
  } catch (error: any) {
    res.status(500).send(error);
  }
});

articleRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await article.destroy(id);
    res.status(200).send('DELETED!');
  } catch (error: any) {
    res.status(500).send(error);
  }
});