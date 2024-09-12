import Product from "../components/home/Product";
import "../styles/section/product.scss";

export const ProductSection = ({
  paginationLimit,
}: {
  paginationLimit: number;
}) => {
  return <Product paginationLimit={paginationLimit} />;
};
