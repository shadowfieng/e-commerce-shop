import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import cors from "cors";
import Product from "./models/Product";

mongoose.set("strictQuery", true);

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const port = 5050;

app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

app.post("/products", async (req, res) => {
  const { categories, description, title } = req.body;

  if (!title) {
    res.send({ error: "Please specify title!" });
  }

  const newProduct = new Product({
    categories,
    description,
    title,
  });

  const createdProduct = await newProduct.save();

  res.json(createdProduct);
});

mongoose.connect(process.env.MONGO_DB_URL!).then(() => {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
});
