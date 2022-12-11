import { TProduct } from "./../types/product";
import { API_URL } from "./config";

const getProductById = async (productId: string): Promise<TProduct> => {
  const response = await fetch(`${API_URL}/products/${productId}`);
  return await response.json();
};
