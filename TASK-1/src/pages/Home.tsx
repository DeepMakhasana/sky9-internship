import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { fetchAllProduct } from "../store/slice/products";
import {
  HeroSection,
  ServicesSection,
  ProductSection,
  AboutSection,
  ContactSection,
} from "../sections";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);
  return (
    <>
      {/* Hero sections */}
      <HeroSection />
      {/* Services sections */}
      <ServicesSection />
      {/* Product sections */}
      <ProductSection paginationLimit={8} />
      {/* sections */}
      <AboutSection />
      {/* sections */}
      <ContactSection />
    </>
  );
};
