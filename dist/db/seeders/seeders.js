"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seeders = void 0;
const connection_1 = require("../connection");
const create_user_seeder_1 = require("./create-user.seeder");
async function seeders() {
    const db = await connection_1.pool.getConnection();
    db.query(create_user_seeder_1.create_user.value, create_user_seeder_1.create_user.parameters);
    db.end();
    connection_1.pool.end();
}
exports.seeders = seeders;
seeders();
