import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
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
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => scrollToSection("hero")}>Introduction</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("product")}>Product</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
