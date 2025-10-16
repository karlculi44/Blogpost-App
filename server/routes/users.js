import express from "express";
import { createUser, deleteUser, getUser, getUsers, patchUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

// Gets all users
router.get('/api/users', getUsers);

// Get specific user
router.get('/api/users/:id', getUser);

// Create a user
router.post('/api/users/', createUser);

// Updates all fields of a user
router.put('/api/users/:id', updateUser);

// Updates a specific field of a user
router.patch('/api/users/:id', patchUser);

// Deletes a user
router.delete('/api/users/:id', deleteUser);

export default router;
