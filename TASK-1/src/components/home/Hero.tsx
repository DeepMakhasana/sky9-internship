import { useProductPagination } from "../../hooks/useProductPagination";
import Button from "../button";
import HeroProductCard from "./HeroProductCard";
import ParallaxContainer from "./ParallaxContainer";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  const { products } = useProductPagination(5);

  if (products.length == 0) return <p>Loading..</p>;

  return (
    <ParallaxContainer>
      <div className="parallax-info-container">
        {products?.map((product) => (
          <HeroProductCard key={product.id} product={product} />
        ))}
        <Button text="Next products" link="/products" />
      </div>
      <div className="parallax-img hero-bg-img">
        <img src={heroImage} alt="hero" />
      </div>
    </ParallaxContainer>
  );
};

export default Hero;
