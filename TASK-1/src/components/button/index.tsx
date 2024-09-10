import { Link } from "react-router-dom";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link to={link} className="btn">
      {text}
    </Link>
  );
};

export default Button;
