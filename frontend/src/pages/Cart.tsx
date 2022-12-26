import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../store/slices/cart";

const Cart = () => {


  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const increaseQtyHandler = (id: string, quantity: number) => {
    dispatch(increaseQty({ id, quantity }));
  };
  const decreaseQtyHandler = (id: string, quantity: number) => {
    dispatch(decreaseQty({ id, quantity }));
  };
  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-medium">Shopping Cart</h2>
      <div className="flex flex-col">
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-slate-200 max-w-full text-black p-4 rounded-lg shadow-lg flex items-center justify-around"
          >
            <img
              className="mr-4 rounded-md"
              src="https://via.placeholder.com/100x75"
              alt={item.title}
            />
            <p className="text-xl font-medium">{item.title}</p>
            <div className="flex gap-2 justify-center items-center text-lg">
              <span
                onClick={() => decreaseQtyHandler(item._id, item.quantity)}
                className="text-2xl cursor-pointer"
              >
                -
              </span>
              <input
                type="text"
                className="w-1/2 p-1 rounded text-center"
                value={item.quantity}
                readOnly
              />
              <span
                onClick={() => increaseQtyHandler(item._id, item.quantity)}
                className="text-2xl cursor-pointer"
              >
                +
              </span>
            </div>
            <p className="text-xl font-medium mr-3">${item.price}</p>
            <FaRegTrashAlt
              onClick={() => removeFromCartHandler(item._id)}
              size={24}
              cursor="pointer"
              className="text-red-500 hover:text-red-700 transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
