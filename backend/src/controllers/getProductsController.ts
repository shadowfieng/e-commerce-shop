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
  const from = limit * page - limit;
  const to = limit * page;
  const products = await Product.find();
  const total = products.length;
  const pagesCount = Math.ceil(total / limit);

  res.json({
    products: products.slice(from, to),
    pagination: {
      limit,
      total,
      page,
      pagesCount,
    },
  });
};
