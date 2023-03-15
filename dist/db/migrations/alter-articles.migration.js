"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alter_articles = void 0;
exports.alter_articles = `ALTER TABLE articles ADD CONSTRAINT articles_fk0 FOREIGN KEY (author_id) REFERENCES users(id);`;
