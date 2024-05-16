import React from "react";
 import ReactDOM from 'react-dom/client'
 import App from "./App";
 import "./index.css";
 import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
 import Home from "./Components/Home/Home";
 import Header from "./Components/Header/Header";
 import Footer from "./Components/Footer/Footer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)