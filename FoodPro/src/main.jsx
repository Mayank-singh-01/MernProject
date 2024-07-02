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
import Signup from "./Components/Screen/Signup";
import Login from "./Components/Screen/Lgin";
import MyCart from "./Components/Screen/MyCart";
import { CartProvider } from "./Components/ContextReducer/ContextReducer";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <CartProvider>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="CreatUser" element={<Signup />} />
        <Route path="MyOrder" element={<MyOrder />} />
        <Route path="LogIn" element={<Login />} />
        <Route path="MyCart" element={<MyCart />} />
      </Route>
    //  </CartProvider> 
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

