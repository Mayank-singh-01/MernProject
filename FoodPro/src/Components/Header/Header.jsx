import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      className="bg-teal-400 font-bold flex text-xl text-white z-50 p-4 fixed top-0 w-full"
      aria-label="Main Navigation"
    >
      <div className="flex items-center">
        <span className="font-serif pl-12 text-2xl text-red-600">H</span>
        unger
        <span className="font-serif text-2xl text-red-600">H</span>
        UB
      </div>
      <ul className="flex text-lg pl-14 gap-12">
        <li>
          <Link
            to="/"
            exact
            className="hover:text-red-800"
            activeClassName="text-red-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/MyOrder"
            className="hover:text-red-800"
            activeClassName="text-red-800"
          >
            MyOrder
          </Link>
        </li>
        <li>
          <Link
            to="/CreatUser"
            className="font-serif border-solid border-gray-300 hover:border-gray-400 border-2 rounded-xl p-1 hover:text-red-800"
            activeClassName="text-red-800 border-red-800"
          >
            SignUp
          </Link>
        </li>
        <li>
          <Link
            to="/LogIn"
            className="font-serif border-solid border-gray-300 hover:border-gray-400 border-2 rounded-xl p-1 hover:text-red-800"
            activeClassName="text-red-800 border-red-800"
          >
            LogIn
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
