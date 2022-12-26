import { TProduct } from "./product";

export type CartItem = TProduct & {
  quantity: number;
};
