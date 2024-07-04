import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./app.css";
import { useCart } from "../ContextReducer/ContextReducer";

function Header() {
  const navigate = useNavigate();
  const cartItems = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/LogIn");
  };

  return (
    <nav className="bg-teal-400 font-bold flex text-xl text-white z-50 p-4 fixed top-0 w-full">
      <span className="font-serif pl-12 text-2xl text-red-600">H</span>unger
      <span className="font-serif text-2xl text-red-600">H</span>UB
      <ul className="flex flex-grow text-xl pl-14 gap-10">
        <li>
          <NavLink to="/" exact="true" className="hover:text-red-700">
            Home
          </NavLink>
        </li>
        {localStorage.getItem("authToken") ? (
          <li>
            <NavLink to="/MyOrder" className="hover:text-red-700">
              MyOrder
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
      {!localStorage.getItem("authToken") ? (
        <div className="">
          <NavLink to="/CreatUser" className="custom-button">
            SignUp
          </NavLink>
          <NavLink to="/LogIn" className="custom-button">
            LogIn
          </NavLink>
        </div>
      ) : (
        <div className="flex items-center">
          <NavLink to="/MyCart" className="custom-button2">
            MyCart
            <span className="cart-count">{cartItems.length}</span>
          </NavLink>
          <NavLink onClick={handleLogout} className="custom-button">
            LogOut
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;
