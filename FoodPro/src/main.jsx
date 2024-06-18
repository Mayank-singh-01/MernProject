import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import MyOrder from "./Components/MyOrder/MyOrder";
import Details from "./Components/Details/Details";
import Support from "./Components/Support/Support";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="MyOrder" element={<MyOrder />} />
      <Route path="Detail" element={<Details />} />
      <Route path="Support" element={<Support />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
