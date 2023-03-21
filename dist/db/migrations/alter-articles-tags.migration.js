"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alter_articles_tags = void 0;
exports.alter_articles_tags = "ALTER TABLE article_tags ADD CONSTRAINT article_tags_fk0 FOREIGN KEY (article_id) REFERENCES articles(id);\nALTER TABLE article_tags ADD CONSTRAINT article_tags_fk1 FOREIGN KEY (tag_id) REFERENCES tags(id);ALTER TABLE users ADD CONSTRAINT users_UN UNIQUE KEY (name);";
