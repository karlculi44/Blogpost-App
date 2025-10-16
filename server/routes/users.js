import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
const userRouter = express.Router();

// Gets all users
userRouter.get('/', getUsers);

// Create a user
userRouter.post('/', createUser);

// Get specific user
userRouter.get('/:username', getUser);

// Updates all fields of a user
userRouter.put('/:username', updateUser);

// Updates a specific field of a user
userRouter.patch('/:username', updateUser);

// Deletes a user
userRouter.delete('/:username', deleteUser);

export default userRouter;
