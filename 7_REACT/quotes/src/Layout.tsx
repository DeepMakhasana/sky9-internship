import { Outlet } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";

const Layout = () => {
  return (
    <main>
      <Navigationbar />
      <section className="container mx-auto px-3">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
