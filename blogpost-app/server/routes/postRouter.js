import express from "express";
import {
  createPost,
  getPosts,
  toggleLikePost,
} from "../controllers/postController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createPost);
router.get("/", verifyToken, getPosts);
router.put("/:id/like", verifyToken, toggleLikePost);

export default router;
