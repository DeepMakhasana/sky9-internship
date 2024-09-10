import { useProductPagination } from "../../hooks/useProductPagination";
import "../../styles/section/parallaxEffectContainer.scss";
import Button from "../button";
import HeroProductCard from "./HeroProductCard";

const ParallaxContainer = () => {
  const { products } = useProductPagination(5);

  if (products.length == 0) return <p>Loading..</p>;

  return (
    <section className="parallax-container">
      <div className="parallax-info-container">
        {products?.map((product) => (
          <HeroProductCard key={product.id} product={product} />
        ))}
        <Button text="Next products" link="/products" />
      </div>
      <div className="parallax-img">TEST</div>
    </section>
  );
};

export default ParallaxContainer;
