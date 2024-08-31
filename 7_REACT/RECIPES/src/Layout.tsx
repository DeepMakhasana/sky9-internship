import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.tsx";

// css import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/auth/auth-context.tsx";
import Loading from "./components/Loading.tsx";

const Layout = () => {
  const auth = useContext(AuthContext);
  console.log("layout auth: ", auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth.authenticated && location.pathname != "/login" && location.pathname != "/") {
      navigate("/login");
    }
  }, [auth.authenticated, location.pathname, navigate]);

  return (
    <>
      <NavigationBar />
      <main>{auth.loading ? <Loading /> : <Outlet />}</main>
    </>
  );
};

export default Layout;
