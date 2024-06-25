import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-teal-400 font-bold flex text-xl text-white z-50 p-4 fixed top-0 w-full">
      <span className="font-serif pl-12 text-2xl text-red-600">H</span>unger
      <span className="font-serif text-2xl text-red-600">H</span>UB
      <ul className="flex text-lg pl-14 gap-12">
        <li>
          <NavLink to="/" exact="true" className="hover:text-red-800">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyOrder" className="hover:text-red-800">
            MyOrder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/CreatUser"
            className="font-serif border-solid border-gray-300 hover:border-gray-400 border-2 rounded-xl p-1 hover:text-red-800"
          >
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/LogIn"
            className="font-serif border-solid border-gray-300 hover:border-gray-400 border-2 rounded-xl p-1 hover:text-red-800"
          >
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
