"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_articles = void 0;
exports.create_articles = `CREATE TABLE articles (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, location VARCHAR(255) NOT NULL, author_id INT NOT NULL, createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP, active BOOLEAN NOT NULL, PRIMARY KEY (id));`;
