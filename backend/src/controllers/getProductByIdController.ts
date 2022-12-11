import { Request, Response } from "express";
import Product from "../models/Product";

import { GetProductByIdRequest } from "../interfaces/product/getProductByIdRequest";
import { ApiError } from "../interfaces/api";
import { TypedResponse, TypedResponseWithError } from "../interfaces/util";

export const getProductByIdController = async (
  req: Request<GetProductByIdRequest>,
  res: TypedResponse<Product>
) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);

  if (!product) {
    return (res as TypedResponseWithError).json({
      statusCode: 400,
      error: `Cannot find a product with this id: ${productId}`,
    });
  }

  res.json(product);
};
