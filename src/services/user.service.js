import { pool } from "../config/db.js";

export const createUsersService = async (userData) => {
  console.log("USER DATA : ", userData);
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [userData.name, userData.email]
    );

    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
};
export const findAllUsers = () => {};
export const findUsersById = () => {};
export const updateUsers = () => {};
export const deleteUsers = () => {};

export class UserService {
  constructor(pool) {
    this.pool = pool;
  }

  async createUsers(userData) {
    try {
      const result = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [userData.name, userData.email, userData.password]
      );
      return result.rows[0];
    } catch (err) {}
  }

  // Your implementation for other CRUD operations here
}
