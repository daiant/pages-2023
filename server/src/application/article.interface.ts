import { CRUD } from "../domain/interfaces/base.interface";
import { Id } from "../domain/model/aggregator.model";
import { ArticleModel } from "../domain/model/article.model";

export class Article extends CRUD<ArticleModel> {
  constructor() {
    super('articles');
  }

  destroy(id: Id): Promise<void> {
    try {
      return this.delete({
        where: {
          id: id
        }
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  findAll(): Promise<ArticleModel[]> {
    try {
      return this.select();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  findById(id: Id): Promise<ArticleModel[]> {
    try {
      return this.select({ where: { id: id }, relations: [{ table: 'users', field: 'author_id' }] });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  save(object: Partial<ArticleModel>): Promise<void> {
    try {
      if (object.id) {
        return this.update(object, { where: { id: object.id } });
      } else {
        return this.insert(object);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

}