import express from "express";
import {
  loginUser,
  signUpUser,
  getProfile,
  logoutUser,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signUpUser);
authRouter.get("/profile", protect, getProfile);
authRouter.post("/logout", logoutUser);

export default authRouter;
