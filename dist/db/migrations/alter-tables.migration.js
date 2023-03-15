"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alter_tables = void 0;
exports.alter_tables = `ALTER TABLE articles ADD CONSTRAINT articles_fk0 FOREIGN KEY (author_id) REFERENCES users(name);ALTER TABLE article_tags ADD CONSTRAINT article_tags_fk0 FOREIGN KEY (article_id) REFERENCES articles(id);ALTER TABLE article_tags ADD CONSTRAINT article_tags_fk1 FOREIGN KEY (tag_id) REFERENCES tags(id);`;
