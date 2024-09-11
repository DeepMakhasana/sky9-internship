import { ReactNode } from "react";
import "../../styles/section/parallaxEffectContainer.scss";

const ParallaxContainer = ({ children }: { children: ReactNode }) => {
  return <section className="parallax-container">{children}</section>;
};

export default ParallaxContainer;
