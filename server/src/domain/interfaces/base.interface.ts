export interface CRUD<T> {
  findAll(): Promise<Array<T>>;
  findById(id: number): Promise<Array<T>>;
  save(object: Partial<T>): Promise<void>;
  update(object: Partial<T>): Promise<void>;
  delete(id: number): Promise<void>;
}