import mariadb from 'mariadb';

export const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'blog',
  connectionLimit: 5
});
