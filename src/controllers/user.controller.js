import { createUsersService, UserService } from "../services/user.service.js";

export const createUsers = async (req, res) => {
  const { name, email } = req.body;
  const user = await createUsersService({ name, email });
  res.status(201).json(user);
};
export const findAllUsers = () => {};
export const findUsersById = () => {};
export const updateUsers = () => {};
export const deleteUsers = () => {};

export class UserController {
  userService = new UserService();
  async createUsers(req, res) {
    // Your implementation here
  }

  async findAllUsers(req, res) {
    // Your implementation here
  }

  async findUsersById(req, res) {
    // Your implementation here
  }

  async updateUsers(req, res) {
    // Your implementation here
  }

  async deleteUsers(req, res) {
    // Your implementation here
  }
}
