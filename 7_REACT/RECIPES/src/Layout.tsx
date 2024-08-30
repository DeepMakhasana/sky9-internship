import App from "./App.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

// css import
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/auth/auth-provider.tsx";

const Layout = () => {
  return (
    <AuthProvider>
      <NavigationBar />
      <App />
    </AuthProvider>
  );
};

export default Layout;
