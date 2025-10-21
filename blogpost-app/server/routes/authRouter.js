import express from "express";
import { loginUser, signUpUser } from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.post('/login', loginUser);
authRouter.post('/signup', signUpUser);

export default authRouter;
