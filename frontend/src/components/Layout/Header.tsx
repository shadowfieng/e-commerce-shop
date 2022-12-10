import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h4 className="logo">Online Shop</h4>
      </Link>
      <Link to="cart">
        <AiOutlineShoppingCart />
      </Link>
    </header>
  );
};
