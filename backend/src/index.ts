import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

mongoose.connect(process.env.MONGO_DB_URL!).then(() => {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
});
