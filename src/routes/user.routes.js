import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  findAllUsers,
  findUsersById,
  updateUsers,
} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/", createUsers);
userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUsersById);
userRouter.put("/:id", updateUsers);
userRouter.delete("/:id", deleteUsers);
