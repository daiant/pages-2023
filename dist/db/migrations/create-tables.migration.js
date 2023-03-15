"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const alter_articles_tags_migration_1 = require("./alter-articles-tags.migration");
const alter_articles_migration_1 = require("./alter-articles.migration");
const create_article_tags_migration_1 = require("./create-article-tags.migration");
const create_articles_migration_1 = require("./create-articles.migration");
const create_tags_migration_1 = require("./create-tags.migration");
const create_users_migration_1 = require("./create-users.migration");
async function migration() {
    const db = await connection_1.pool.getConnection();
    await db.query(create_articles_migration_1.create_articles);
    await db.query(create_tags_migration_1.create_tags);
    await db.query(create_article_tags_migration_1.article_tags);
    await db.query(create_users_migration_1.create_users);
    await db.query(alter_articles_migration_1.alter_articles);
    await db.query(alter_articles_tags_migration_1.alter_articles_tags);
    await db.end();
}
migration();
