import ParallaxContainer from "./ParallaxContainer";
import Button from "../button";
import AboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <ParallaxContainer>
      <div
        className="parallax-info-container"
        style={{ gap: "0", padding: "4rem 2rem" }}
      >
        <h2>About Us</h2>
        <p>
          Nunc dictum rhoncus nunc et vehicula. Sed velit arcu, aliquet id
          rhoncus eu, pretium ac ante. Nulla ut urna a augue semper
          pellentesque. Nulla ullamcorper vel.
        </p>
        <p>
          Euismod eget, sollicitudin nec libero. Nulla euismod turpis a lacinia
          sagittis. Maecenas velit diam, vehicula vel tortor id, tristique
          euismod tortor. Cras ac.
        </p>
        <hr />
        <p>
          Quisque luctus feugiat dui eget malesuada. Donec rutrum, nibh vel
          lobortis placerat, leo enim feugiat arcu, ornare imperdiet urna sem
          vitae tellus.
        </p>
        <Button text="Context Us" link="/" />
      </div>
      <div className="parallax-img hero-bg-img">
        <img src={AboutImage} alt="abouts" />
      </div>
    </ParallaxContainer>
  );
};

export default About;
