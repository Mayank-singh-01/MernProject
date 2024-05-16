import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-600 text-white p-4">
      <ul className="flex justify-evenly">
        <li>
          <Link to="#" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-gray-300">Mayank</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-gray-300">Singh</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-gray-300">Lorem</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

