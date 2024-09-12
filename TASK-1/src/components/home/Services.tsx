import Button from "../button";
import ParallaxContainer from "./ParallaxContainer";
import serviceImage from "../../assets/images/services.jpg";
import streetIcon from "../../assets/icons/street-view.svg";
import goalIcon from "../../assets/icons/goal.svg";

const Services = () => {
  return (
    <ParallaxContainer id="services">
      <div className="parallax-info-container">
        <div className="service-info">
          <h2>Our Services</h2>
          <p>
            Credit goes to <strong>Pexels website</strong> for background images
            and Unsplash website for gallery images used in this Vertex HTML
            template. Vestibulum quis ultrices ipsum, tempor cursus odio. Donec
            et nisl sit amet mauris consequat sodales.
          </p>
          <p>
            Morbi a sapien vitae nunc mollis efficitur quis eu purus. Donec nec
            orci pharetra, ullamcorper orci eu, gravida dolor. Morbi at rutrum
            nibh. Sed a erat vitae ipsum mollis tincidunt sed nec orci.
          </p>
          <Button text="Products page" link="/products" />
        </div>
        <div className="services-info">
          <div>
            <img src={streetIcon} alt="street" />
            <p>
              Fusce mi sapien, faucibus ut tortor a, tempus laoreet magna. Nulla
              felis ipsum, lobortis eu efficitur eget, malesuada id lacus.
            </p>
          </div>
          <div>
            <img src={goalIcon} alt="goal" />
            <p>
              Nullam pellentesque accumsan hendrerit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>
        </div>
      </div>
      <div className="parallax-img">
        <img src={serviceImage} alt="services" />
      </div>
    </ParallaxContainer>
  );
};

export default Services;
