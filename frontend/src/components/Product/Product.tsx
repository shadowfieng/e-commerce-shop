import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { addToCart, removeFromCart } from "../../store/slices/cart";
import { TProduct } from "../../types/product";

type Props = {
  product: TProduct;
};

const Product = ({ product }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isAlreadyInCart = cartItems.some((item) => item._id === product._id);

  const dispatch = useDispatch();

  const { category, description, price, title } = product;

  return (
    <div className="bg-slate-100 text-black py-4 px-3 flex flex-col gap-2 rounded-lg shadow-lg">
      <Link to={product._id} className="flex flex-col gap-2 flex-1">
        <img src="" alt="" />
        <p className="font-bold">{title}</p>
        <p>{description}</p>
        <p className="text-right mt-auto">${price}</p>
      </Link>
      {isAlreadyInCart ? (
        <button
          onClick={() => dispatch(removeFromCart(product._id))}
          className="bg-gray-800 text-white bg-gradient-to-r from-red-400 to-teal-400 rounded-md py-1 shadow-md"
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-gray-800 text-white bg-gradient-to-r from-purple-400 to-teal-400 rounded-md py-1 shadow-md"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
