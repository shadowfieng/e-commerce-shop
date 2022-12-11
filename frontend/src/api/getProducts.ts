import { Pagination } from "../types/pagination";
import { TProduct } from "../types/product";
import { API_URL } from "./config";

type GetProductsResponse = {
  pagination: Pagination;
  products: TProduct[];
};

export const getProducts = async (): Promise<GetProductsResponse> => {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return products;
};