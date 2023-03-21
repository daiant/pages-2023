import { Pool, PoolConnection } from "mariadb";
import { pool } from "../../../db/connection";
import { CRUD } from "../../domain/interfaces/base.interface";
import { UserModel } from "../../domain/model/user.model";

export class User implements CRUD<UserModel> {
  private async query(query: string, parameters?: any): Promise<any> {
    const db = await pool.getConnection();
    return db.query(query, parameters).finally(() => db.end());
  }

  async findAll(): Promise<Array<UserModel>> {
    try {
      return this.query(`SELECT * FROM users`);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async findById(id: number): Promise<Array<UserModel>> {
    try {
      return this.query(`SELECT * FROM users WHERE id = ?`, [id]);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  save(object: Partial<UserModel>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(object: Partial<UserModel>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}