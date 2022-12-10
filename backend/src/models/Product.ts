import mongoose from "mongoose";
const { Schema } = mongoose;

interface Product {
  title: string;
  price: number;
  description: string;
  keywords: string[];
  category: string;
}

const productSchema = new Schema<Product>({
  title: String,
  price: Number,
  description: String,
  keywords: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
