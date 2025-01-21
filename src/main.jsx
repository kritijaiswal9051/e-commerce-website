import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

import ProductDetails from "./pages/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
