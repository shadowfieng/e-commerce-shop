import Product from "../models/Product";

import { TypedRequestBody, TypedResponse } from "../interfaces/util";
import { GetProductsResponse } from "../interfaces/product/getProductsResponse";
import { GetProductsRequestBody } from "../interfaces/product/getProductsRequest";

export const getProductsController = async (
  req: TypedRequestBody<GetProductsRequestBody>,
  res: TypedResponse<GetProductsResponse>
) => {
  const limit = req.body.limit ?? 10;
  const products = await Product.find();

  res.json({
    products: products.slice(0, limit),
    pagination: {
      limit,
      total: products.length,
    },
  });
};
