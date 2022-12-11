import { Request } from "express";
import Product from "../models/Product";

import { TypedRequestBody, TypedResponse } from "../interfaces/util";
import { GetProductsResponse } from "../interfaces/product/getProductsResponse";
import { GetProductsRequestBody } from "../interfaces/product/getProductsRequest";

export const getProductsController = async (
  req: Request<any, any, any, { limit: string }>,
  res: TypedResponse<GetProductsResponse>
) => {
  const limit = parseInt(req.query.limit) ?? 10;
  const products = await Product.find();

  res.json({
    products: products.slice(0, limit),
    pagination: {
      limit,
      total: products.length,
    },
  });
};
