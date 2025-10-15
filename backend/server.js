import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import router from "./routes/users.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser for json requests
app.use(express.json());

// Body parser for form-encoded requests
app.use(express.urlencoded({ extended: false }));

// Uses the router middleware
app.use(router);

app.get('/', (req, res) => {
  return res.send("Welcome to the MERN Stack App.");
});

app.listen(PORT, () => console.log(`PORT is running on PORT ${PORT}`));