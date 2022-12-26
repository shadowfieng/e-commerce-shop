import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";

export const Header = () => {
  const itemsInCart = useSelector(
    (state: RootState) => state.cart.items.length
  );
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
        {itemsInCart > 0 && (
          <span className="absolute font-bold w-4 h-4 rounded-full bg-cyan-100 text-xs text-black flex items-center justify-center">
            {itemsInCart}
          </span>
        )}
        <AiOutlineShoppingCart size={32} />
      </Link>
    </header>
  );
};
