import { useEffect } from "react";
import { Hero } from "../sections";
import { useAppDispatch } from "../store";
import { fetchAllProduct } from "../store/slice/products";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);
  return (
    <>
      {/* sections */}
      <Hero />
    </>
  );
};
