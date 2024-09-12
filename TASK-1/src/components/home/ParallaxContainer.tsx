import { ReactNode } from "react";
import "../../styles/section/parallaxEffectContainer.scss";

const ParallaxContainer = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <section className="parallax-container" id={id}>
      {children}
    </section>
  );
};

export default ParallaxContainer;
