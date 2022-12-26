import { useState } from "react";
import { useGetProductsQuery } from "../api/products";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isFetching } = useGetProductsQuery({
    page: currentPage,
    limit: productsPerPage,
  });

  const products = data?.products || [];

  const pagination = data?.pagination;

  const changeProductsPerPage = (productsPerPage: string) => {
    setProductsPerPage(+productsPerPage);
    setCurrentPage(1);
  };

  const changeProductsCurrentPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Pagination
        pagination={pagination}
        loading={isFetching}
        onChangeItemsPerPage={changeProductsPerPage}
        onChangePage={changeProductsCurrentPage}
      />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {isFetching ? (
          <Skeleton count={6} />
        ) : (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
