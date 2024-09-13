import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close.svg";
import openIcon from "../../assets/icons/toggle-bar.svg";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function scrollToSection(id: string) {
    if (pathname == "/products") {
      navigate("/");
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  }

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <header>
      <div id="toggle" onClick={handleToggle}>
        <img
          src={toggle ? closeIcon : openIcon}
          alt={toggle ? "close" : "open"}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <nav className={toggle ? "active" : "deactive"}>
        <ul>
          <li
            onClick={() => {
              scrollToSection("hero");
              handleToggle();
            }}
          >
            Introduction
          </li>
          <li
            onClick={() => {
              scrollToSection("services");
              handleToggle();
            }}
          >
            Services
          </li>
          <li
            onClick={() => {
              scrollToSection("product");
              handleToggle();
            }}
          >
            Product
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
              handleToggle();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              handleToggle();
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
