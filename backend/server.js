import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  return res.send("Welcome to the MERN Stack App.");
});

app.listen(PORT, () => console.log(`PORT is running on PORT ${PORT}`));