// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import Product from "./components/Product.jsx";
import Test from "./pages/Test.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Product /> */}
    <Test />
  </>
);
