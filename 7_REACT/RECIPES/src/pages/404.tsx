import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <p className="display-1">404</p>
      <p>Page not found in our web application</p>
      <Link to={"/"}>Go to Home page</Link>
    </div>
  );
};
