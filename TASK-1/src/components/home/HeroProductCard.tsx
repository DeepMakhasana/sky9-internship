import { Link } from "react-router-dom";
import { IProduct } from "../../types/products";

const HeroProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default HeroProductCard;
