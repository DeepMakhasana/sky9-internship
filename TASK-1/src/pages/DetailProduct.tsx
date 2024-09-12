import { useNavigate, useParams } from "react-router-dom";
import ParallaxContainer from "../components/home/ParallaxContainer";
import { useEffect, useState } from "react";
import { getOneProduct } from "../api/products/get";
import { IProduct } from "../types/products";

export const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getOneProduct(Number(id));
      setIsLoading(false);
      if (response?.id) {
        setProduct(response);
      } else {
        navigate("/");
      }
    })();
  }, []);

  if (isLoading) {
    <p className="loading">Loading...</p>;
  }

  return (
    <ParallaxContainer id="productPage">
      <div
        className="parallax-info-container"
        style={{ gap: 0, marginTop: "10rem" }}
      >
        <h2>{product?.title}</h2>
        <p>Category: {product?.category}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Price: {product?.price}</p>
          <p>Rating: {product?.rating.rate}</p>
        </div>
        <p>{product?.description}</p>
      </div>
      <div className="parallax-img hero-bg-img">
        <img src={product?.image} alt={product?.title} />
      </div>
    </ParallaxContainer>
  );
};
