import { createUserTable } from "./user.model.js";

export const createTables = async () => {
  createUserTable();
};
