import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProducts } from "../api/getProducts";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const { data, isLoading } = useQuery("products", getProducts);

  const products = data?.products || [];

  return (
    <>
      {isLoading && <Spinner />}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {!isLoading &&
          products.map((product) => (
            <Link to={product._id} key={product._id} className="flex">
              <Product product={product} />
            </Link>
          ))}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
