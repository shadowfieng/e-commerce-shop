import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  categories: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
