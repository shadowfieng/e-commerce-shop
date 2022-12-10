import { TypedRequestBody, TypedResponse } from "../interfaces/util";
import Product from "../models/Product";

export const addProductController = async (
  req: TypedRequestBody<Product>,
  res: TypedResponse<Product | { error: string }>
) => {
  const { category, description, title, price, keywords } = req.body;

  if (!title || !price) {
    res.json({ error: "An error occured!" });
  }

  const newProduct = new Product({
    category,
    description,
    title,
    price,
    keywords,
  });

  const createdProduct = await newProduct.save();

  res.json(createdProduct);
};
