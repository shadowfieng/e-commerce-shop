import cors from "cors";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { addProductController } from "./controllers/addProductController";
import { getProductsController } from "./controllers/getProductsController";
config();

mongoose.set("strictQuery", true);

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const port = 5050;

app.get("/products", getProductsController);
app.post("/products", addProductController);

mongoose.connect(process.env.MONGO_DB_URL!).then(() => {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
});
