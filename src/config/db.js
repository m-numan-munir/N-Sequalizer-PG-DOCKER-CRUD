import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;

console.log("DB_PORT :", process.env.DB_PORT);
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}).on("connect", () => {
  console.log("Pg connection pool established with Database");
});

//Can be done like this as well
// pool.on("connect", () => {
//   console.log("Pg connection pool established with Database");
// });
