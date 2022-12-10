import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 p-4 bg-gradient-to-r from-purple-400 to-teal-400 flex items-center justify-between ">
      <Link to="/">
        <h4 className="text-[1.5rem] font-semibold hover:text-teal-400 transition">
          Online Shop
        </h4>
      </Link>
      <Link
        to="cart"
        className="text-[1.75rem]  hover:text-purple-500 transition"
      >
        <AiOutlineShoppingCart size={32} />
      </Link>
    </header>
  );
};
