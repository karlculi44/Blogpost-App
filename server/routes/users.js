import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
const router = express.Router();

// Gets all users
router.get('/api/users', getUsers);

// Get specific user
router.get('/api/users/:username', getUser);

// Create a user
router.post('/api/users/', createUser);

// Updates all fields of a user
router.put('/api/users/:username', updateUser);

// Updates a specific field of a user
router.patch('/api/users/:username', updateUser);

// Deletes a user
router.delete('/api/users/:username', deleteUser);

export default router;
