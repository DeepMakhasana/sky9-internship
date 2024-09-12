import Button from "../button";
import ParallaxContainer from "./ParallaxContainer";
import ContactImage from "../../assets/images/contact.jpg";
import { FormEvent, useState } from "react";
import { insertProduct } from "../../api/products/post";

const Contact = () => {
  const year = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(false);

  // contact form handling
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = new FormData(e.currentTarget);

    const title = form.get("title") as string;
    const price = Number(form.get("price"));
    const description = form.get("description") as string;

    // post request
    const response = await insertProduct({ title, price, description });
    setIsLoading(false);
    alert(
      response?.id ? "Product add successfully." : "Some thing wait wrong!"
    );
  };

  return (
    <ParallaxContainer id="contact">
      <div
        className="parallax-info-container"
        style={{ gap: "0", padding: "8rem 2rem 0 2rem" }}
      >
        <h2>Contact Us</h2>
        <p>
          Pellentesque nec dui pellentesque, fermentum turpis eu, facilisis
          libero. Vestibulum fringilla nulla augue, at consequat metus facilisis
          condimentum.
        </p>
        {/* contact form */}
        <form method="post" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <input type="number" name="price" placeholder="Price" />
          <textarea
            name="description"
            id="Descriptioin"
            placeholder="Message"
            rows={5}
          ></textarea>
          <div className="btn-wrraper">
            <input
              type="submit"
              value={isLoading ? "Sending..." : "Send"}
              className="btn"
            />
          </div>
        </form>
        {/* <Button text="Context Us" link="/" /> */}
        <p style={{ paddingTop: "6rem", fontSize: "1rem" }}>
          Copyright {`${year}`} Sky 9 It Craft Company - Design: Deep Makhasana
        </p>
      </div>
      <div className="parallax-img contact-bg-img">
        <img src={ContactImage} alt="abouts" />
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.111701180203!2d70.8204392!3d22.3116149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b6066057d63d%3A0xd79806394daed54d!2sParam%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1685532160829!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Contact;