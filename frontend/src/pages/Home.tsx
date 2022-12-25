import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetProductsResponse } from "../api/getProducts";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Skeleton from "../components/Skeleton";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, fetchData } = useFetch<GetProductsResponse>(
    `products/?limit=${productsPerPage}&page=${currentPage}`,
    false
  );

  const products = data?.products || [];

  const pagination = data?.pagination;

  const changeProductsPerPage = (productsPerPage: string) => {
    setProductsPerPage(+productsPerPage);
    setCurrentPage(1);
  };

  const changeProductsCurrentPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchData();
  }, [productsPerPage, currentPage]);

  return (
    <>
      {/* {loading && <Skeleton />} */}

      <Pagination
        pagination={pagination}
        loading={loading}
        onChangeItemsPerPage={changeProductsPerPage}
        onChangePage={changeProductsCurrentPage}
      />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {loading ? (
          <Skeleton count={6} />
        ) : (
          products.map((product) => (
            <Link to={product._id} key={product._id} className="flex">
              <Product product={product} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
