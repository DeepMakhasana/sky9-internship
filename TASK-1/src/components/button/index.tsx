import { Link } from "react-router-dom";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="btn-wrraper">
      <Link to={link} className="btn">
        {text}
      </Link>
    </div>
  );
};

export default Button;
