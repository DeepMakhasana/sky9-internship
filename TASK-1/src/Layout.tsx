import { Outlet } from "react-router-dom";
// import NavigationBar from "./components/navbar/NavigationBar";
import { Provider } from "react-redux";
import { store } from "./store";

const Layout = () => {
  return (
    <Provider store={store}>
      {/* <NavigationBar /> */}
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default Layout;
