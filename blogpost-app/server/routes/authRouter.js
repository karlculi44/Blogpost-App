import express from "express";
import {
  loginUser,
  signUpUser,
  getProfile,
  logoutUser,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signUpUser);
authRouter.get("/profile", verifyToken, getProfile);
authRouter.post("/logout", logoutUser);

export default authRouter;
