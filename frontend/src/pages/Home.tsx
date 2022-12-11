import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProducts } from "../api/getProducts";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const { data, isLoading } = useQuery("products", getProducts);

  const products = data?.products || [];

  return (
    <>
      {isLoading && <Spinner />}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 justify-items-stretch ">
        {!isLoading &&
          products.map((product) => (
            <Link to="" key={product._id}>
              <Product product={product} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
