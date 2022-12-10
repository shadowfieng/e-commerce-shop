import React, { useEffect, useState } from "react";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
      {Array.from({ length: 9 }).map((pr, i) => (
        <Product key={i} />
      ))}
    </div>
  );
};

export default Home;
