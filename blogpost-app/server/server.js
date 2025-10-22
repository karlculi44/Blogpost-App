import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/usersRouter.js";
import errorHandler from "./middlewares/error.js";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser for json requests
app.use(express.json());
app.use(cookieParser());

// allows cross-origin requests from the React frontend
app.use(cors({
  origin: "http://localhost:3000", // your React app's address
  credentials: true, // allow cookies and tokens
}));

// Body parser for form-encoded requests
app.use(express.urlencoded({ extended: false }));

// Uses the router middleware
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    // Listens only for requests once database connection has been established.
    app.listen(PORT, () => console.log(`PORT is running on PORT ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  });

// Error handling middleware
app.use(errorHandler);

// main endpoint
app.get('/', (req, res) => {
  return res.send("Welcome to the MERN Stack App.");
});
