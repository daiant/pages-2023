import { pool } from "../connection";
import { create_user } from "./create-user.seeder";

export async function seeders() {
  const db = await pool.getConnection();

  db.query(create_user.value, create_user.parameters);
  db.end();

  pool.end();
}

seeders();