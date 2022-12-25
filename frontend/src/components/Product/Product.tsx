import { TProduct } from "../../types/product";

type Props = {
  product: TProduct;
};

const Product = ({ product }: Props) => {
  const { category, description, price, title } = product;

  return (
    <div className="bg-slate-100 text-black px-3 flex flex-col gap-2 rounded-lg shadow-lg">
      <img src="" alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <p className="text-right">{price}</p>
    </div>
  );
};

export default Product;
