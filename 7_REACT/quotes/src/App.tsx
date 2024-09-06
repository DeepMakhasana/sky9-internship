import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourite from "./pages/Favourite";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favourites",
          element: <Favourite />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
