import { Outlet } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import { Provider } from "react-redux";
import { store } from "./store";
import GoToTop from "./components/gototop/GoToTop";

const Layout = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <GoToTop />
    </Provider>
  );
};

export default Layout;
