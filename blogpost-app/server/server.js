import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/usersRouter.js";
import postRoutes from "./routes/postRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser for json requests
app.use(express.json());
app.use(cookieParser());

// allows cross-origin requests from the React frontend
app.use(
  cors({
    origin: "http://localhost:5173", // your React app's address
    credentials: true, // allow cookies and tokens
  })
);

// Body parser for form-encoded requests
app.use(express.urlencoded({ extended: false }));

// Uses the router middleware
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listens only for requests once database connection has been established.
    app.listen(PORT, () => console.log(`PORT is running on PORT ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

// Error handling middleware
app.use(errorHandler);

// main endpoint
app.get("/", (req, res) => {
  return res.send("Welcome to the MERN Stack App.");
});
