import { pool } from '../connection';
import { alter_articles_tags } from './alter-articles-tags.migration';
import { alter_articles } from './alter-articles.migration';
import { article_tags } from './create-article-tags.migration';
import { create_articles } from './create-articles.migration';
import { create_tags } from './create-tags.migration';
import { create_users } from './create-users.migration';
async function migration() {
  const db = await pool.getConnection();

  await db.query(create_articles);
  await db.query(create_tags);
  await db.query(article_tags);
  await db.query(create_users);
  await db.query(alter_articles);
  await db.query(alter_articles_tags);

  await db.end();
}
migration();