import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/users.js";
import errorHandler from "./middlewares/error.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser for json requests
app.use(express.json());

// Body parser for form-encoded requests
app.use(express.urlencoded({ extended: false }));

// Uses the router middleware
app.use('/api/users', userRouter);

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