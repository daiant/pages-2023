export type QueryValues = { query: string, values: Array<any> };

export class QueryBuilder {
  query: string;
  values: Array<any> = [];
  constructor(query: string) {
    this.query = query;
  }

  where(key: string, value: string | number): QueryValues {
    this.query += ` WHERE ${key} = ?`;
    this.values.push(value);

    return this.getQueryValues();
  }
  insert(keys: string, values: Array<string | number>): QueryValues {
    this.query += ` (${keys}) VALUES (${this.getValuesLength(values)})`;
    this.values.push(...values);

    return this.getQueryValues();
  }

  set(object: any): QueryValues {
    this.query += ` SET `;
    const aux_query: Array<string> = [];
    for (const property in object) {
      aux_query.push(` ${property} = ?`);
      this.values.push(object[property]);
    }
    this.query += aux_query.join(', ');

    return this.getQueryValues();
  }

  getQueryValues(): QueryValues {
    return { query: this.query, values: this.values };
  }
  private getValuesLength(values: Array<string | number>): string {
    return Array(values.length).fill('?').join(', ');
  }
}