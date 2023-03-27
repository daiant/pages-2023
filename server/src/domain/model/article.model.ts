import { Aggregator, Id } from "./aggregator.model";

export interface ArticleModel extends Aggregator {
  title: string;
  author_id: Id;
  created_at: Date;
  active: boolean;
}