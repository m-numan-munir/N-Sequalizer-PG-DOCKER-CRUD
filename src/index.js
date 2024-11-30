import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./config/db.js";
import { errorHandler } from "./middlewares/error.handler.js";
import { routes } from "./routes/root.routes.js";
import { createTables } from "./models/models.js";

//Initializations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1", routes);
//Error handling middleware
app.use(errorHandler);
// Create Tables before starting server
createTables();

//Testing DB connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.json({ db: result.rows[0].current_database });
});

//Server runing
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
