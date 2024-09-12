import { useProductPagination } from "../../hooks/useProductPagination";
import ProductCard from "./ProductCard";

const Product = ({ paginationLimit }: { paginationLimit: number }) => {
  const { products, numberOfPage, next, previous, randomPage, page } =
    useProductPagination(paginationLimit);

  if (products.length == 0) return <p className="loading">Loading...</p>;
  return (
    <section id="product">
      <h2>Our Products</h2>
      {/* product list */}
      <div className="product-container">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      {/* product pagination */}
      <div className="product-pagination-container">
        <div className={page == 1 ? "disable" : ""} onClick={previous}>
          Previous
        </div>
        {numberOfPage.map((currentPage) => (
          <div
            key={currentPage}
            className={currentPage == page ? "active" : ""}
            onClick={() => randomPage(currentPage)}
          >
            {currentPage}
          </div>
        ))}
        <div
          className={page == numberOfPage.length ? "disable" : ""}
          onClick={next}
        >
          Next
        </div>
      </div>
    </section>
  );
};

export default Product;
