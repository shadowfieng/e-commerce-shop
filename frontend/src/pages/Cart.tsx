import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-medium">Shopping Cart</h2>
      <div className="flex flex-col">
        <div className="bg-slate-200 max-w-full text-black p-4 rounded-lg shadow-lg flex items-center justify-around">
          <img
            className="mr-4 rounded-md"
            src="https://via.placeholder.com/100x75"
            alt="..."
          />
          <p className="text-xl font-medium">TITLE</p>
          <div className="flex gap-2 justify-center items-center text-lg">
            <span className="text-2xl cursor-pointer">-</span>
            <input type="text" className="w-1/2 p-1 rounded" />
            <span className="text-2xl cursor-pointer">+</span>
          </div>
          <p className="text-xl font-medium">$499</p>
          <FaRegTrashAlt
            size={24}
            cursor="pointer"
            className="text-red-500 hover:text-red-700 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
