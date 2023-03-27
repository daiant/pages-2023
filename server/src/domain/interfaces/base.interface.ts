import { pool } from "../../../db/connection";
import { Id } from "../model/aggregator.model";
import { QueryBuilder, QueryValues } from "./query.builder";
interface QueryOptions {
  where?: {
    [key: string]: string | number;
  },
  relations?: { table: string, field: string }[],
}
export abstract class CRUD<T> {
  database_name: string;
  constructor(database_name: string) {
    this.database_name = database_name;
  }
  abstract findAll(): Promise<Array<T>>;
  abstract findById(id: Id): Promise<Array<T>>;
  abstract save(object: Partial<T>): Promise<void>;
  abstract destroy(id: Id): Promise<void>;

  async select(options?: QueryOptions): Promise<Array<T>> {
    let string = `SELECT * FROM ${this.database_name} AS X`;
    const queryBuilder = new QueryBuilder(string);

    if (options?.relations) {
      options.relations.forEach((relation: { table: string, field: string }) => {
        queryBuilder.relation(relation);
      });
    }

    if (options?.where) {
      // TODO: mas cositas aqui pueden entrar perfecto
      const [key, value] = Object.entries(options.where)[0];
      queryBuilder.where(key, value);
    }

    try {
      return this.query(queryBuilder.query, queryBuilder.values);
    } catch (error: any) {
      throw error;
    }
  }

  async insert(object: Partial<T>): Promise<void> {
    let string = `INSERT INTO ${this.database_name}`;
    const queryBuilder = new QueryBuilder(string);
    queryBuilder.insert(
      Object.keys(object).join(', ')
      ,
      Object.values(object)
    );
    try {
      return this.query(queryBuilder.query, queryBuilder.values);
    } catch (error: any) {
      throw error;
    }
  }

  async update(object: Partial<T>, options?: QueryOptions): Promise<void> {
    let string = `UPDATE ${this.database_name}`;
    const queryBuilder = new QueryBuilder(string);
    queryBuilder.set(object);
    if (options?.where) {
      const [key, value] = Object.entries(options.where)[0];
      queryBuilder.where(key, value);
    }
    try {
      return this.query(queryBuilder.query, queryBuilder.values);
    } catch (error: any) {
      throw error;
    }
  }
  async delete(options?: QueryOptions): Promise<void> {
    let string = `DELETE FROM  ${this.database_name}`;
    const queryBuilder = new QueryBuilder(string);
    if (options?.where) {
      const [key, value] = Object.entries(options.where)[0];
      queryBuilder.where(key, value);
    }
    try {
      return this.query(queryBuilder.query, queryBuilder.values);
    } catch (error: any) {
      throw error;
    }
  }

  private async query(query: string, values: Array<any>): Promise<any> {
    const db = await pool.getConnection();
    return db.query(query, values).finally(() => db.end());

  }
}