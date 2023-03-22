import { Pool, PoolConnection } from "mariadb";
import { pool } from "../../../db/connection";
import { CRUD } from "../../domain/interfaces/base.interface";
import { UserModel } from "../../domain/model/user.model";

export class User extends CRUD<UserModel> {
  constructor() {
    super('users');
  }

  async findAll(): Promise<Array<UserModel>> {
    try {
      return this.select();
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async findById(id: number): Promise<Array<UserModel>> {
    try {
      return this.select({
        where: { id: id }
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async save(object: Partial<UserModel>): Promise<void> {
    try {
      if (object.id) {
        return this.update(object, { where: { id: object.id } });
      } else {
        return this.insert(object);
      }
    } catch (error: any) {
      throw error;
    }
  }

  destroy(id: number): Promise<void> {
    try {
      return this.delete({
        where: {
          id: id
        }
      });
    } catch (error: any) {
      throw error;
    }
  }

}