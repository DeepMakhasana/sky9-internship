import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth/auth-context.tsx";

const NavigationBar = () => {
  const auth = useContext(AuthContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex justify-content-center align-items-center gap-1" href="/">
            <img src="https://assets.dummyjson.com/public/img/icons/fire.svg" alt="recipes" />
            Recipes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>
              {auth.authenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              )}
              {!auth.authenticated && (
                <li className="nav-item mx-lg-3">
                  <Link className="btn btn-outline-secondary px-4" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
