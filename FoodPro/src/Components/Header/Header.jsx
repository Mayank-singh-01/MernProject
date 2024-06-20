import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-teal-400 font-bold flex text-xl text-white z-50 p-4 fixed top-0 w-full">
      <span className=" font-serif pl-12 text-2xl text-red-600">H</span>unger
      <span className="font-serif text-2xl text-red-600">H</span>UB
      <ul className="flex text-lg pl-14 gap-12">
        <li>
          <Link to="/" className="hover:text-red-800">
            Home
          </Link>
        </li>
        <li>
          <Link to="MyOrder" className="hover:text-red-800">
            MyOrder
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

