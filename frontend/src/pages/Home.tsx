import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProducts, GetProductsResponse } from "../api/getProducts";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const [productsPerPage, setProductsPerPage] = useState(10);

  const { data, loading, error, fetchData } = useFetch<GetProductsResponse>(
    `products/?limit=${productsPerPage}`,
    false
  );

  const products = data?.products || [];

  const pagination = data?.pagination;

  const changeProductsPerPage = (productsPerPage: string) => {
    setProductsPerPage(+productsPerPage);
  };

  useEffect(() => {
    fetchData();
  }, [productsPerPage]);

  return (
    <>
      {loading && <Spinner />}

      <Pagination
        pagination={pagination}
        onChangeItemsPerPage={changeProductsPerPage}
      />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {!loading &&
          products.map((product) => (
            <Link to={product._id} key={product._id} className="flex">
              <Product product={product} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
