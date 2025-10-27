import express from "express";
import {
  loginUser,
  signUpUser,
  getProfile,
  logoutUser,
  verifyAuth,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const authRouter = express.Router();

authRouter.get("/profile", verifyToken, getProfile);
authRouter.get("/verify", verifyToken, verifyAuth);
authRouter.post("/login", loginUser);
authRouter.post("/signup", signUpUser);
authRouter.post("/logout", logoutUser);

export default authRouter;
