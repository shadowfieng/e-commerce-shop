import { Request } from "express";
import Product from "../models/Product";

import { GetProductsResponse } from "../interfaces/product/getProductsResponse";
import { TypedResponse } from "../interfaces/util";

export const getProductsController = async (
  req: Request<any, any, any, { limit: string; page: string }>,
  res: TypedResponse<GetProductsResponse>
) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const productsToSlice = limit * page - limit;

  const products = await Product.find();

  res.json({
    products: products.slice(productsToSlice, limit * page),
    pagination: {
      limit,
      total: products.length,
      page,
    },
  });
};
