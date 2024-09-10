import { IProduct } from "../../types/products";

const HeroProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="hero-product-card">
      <div className="hero-product-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="hero-product-card-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default HeroProductCard;
