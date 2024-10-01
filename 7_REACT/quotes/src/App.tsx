import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourite from "./pages/Favourite";
import Layout from "./Layout";
import Home from "./pages/Home";
import ErrorPage from "./error/ErrorPage";
import Test from "./pages/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favourites",
          element: <Favourite />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
