import { pool } from "../config/db.js";

export const createUserTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT  NOW()
    )`;

  try {
    pool.query(query);
  } catch (error) {
    console.error(error);
  }
};
