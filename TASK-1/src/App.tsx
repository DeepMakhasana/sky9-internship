import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./error/PageNotFound";
import Layout from "./Layout";
import { DetailProduct, Home, Product } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/products/:id",
          element: <DetailProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
