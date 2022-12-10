import Product from "../../models/Product";
import { Pagination } from "../pagination";

export interface GetProductsResponse {
  products: Product[];
  pagination: Pagination;
}
