import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-500 text-white p-4">
      <ul className="flex justify-evenly">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
         <Link to="Contact" className="hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <Link to="Detail" className="hover:text-gray-300">detail</Link>
        </li>
        <li>
          <Link to="Support" className="hover:text-gray-300">support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

