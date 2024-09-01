import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.tsx";

// css import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/auth/auth-context.tsx";
import Loading from "./components/Loading.tsx";
import { RecipesProvider } from "./contexts/recipes/recipes-provider.tsx";

const Layout = () => {
  const auth = useContext(AuthContext);
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
      <RecipesProvider>
        <main>{auth.loading ? <Loading /> : <Outlet />}</main>
      </RecipesProvider>
    </>
  );
};

export default Layout;
