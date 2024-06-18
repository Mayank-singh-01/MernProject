import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-teal-500 font-bold flex text-xl text-white p-3">
      <span className=" font-serif pl-12 text-2xl text-red-600">H</span>unger
      <span className="font-serif text-2xl text-red-600">H</span>UB
      <ul className="flex text-lg pl-14 gap-12">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="MyOrder" className="hover:text-gray-300">
            MyOrder
          </Link>
        </li>
        {/* <li>
          <Link to="Detail" className="hover:text-red-700">detail</Link>
        </li>
        <li>
          <Link to="Support" className="hover:text-red-700">support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;

