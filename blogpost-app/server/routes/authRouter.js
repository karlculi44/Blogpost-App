import express from "express";
import { loginUser, signUpUser, getProfile } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
const authRouter = express.Router();

authRouter.post('/login', loginUser);
authRouter.post('/signup', signUpUser);
authRouter.get('/profile', protect, getProfile);

export default authRouter;
