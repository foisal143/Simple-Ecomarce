import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
const Navbar = () => {
  return (
    <nav className="h-20 md:px-12 px-5 flex justify-between items-center ">
      <div className="text-2xl flex justify-between items-center font-bold">
        <Link className="flex justify-between items-center" to="/">
          <span className="p-4 me-2 rounded-full bg-cyan-300">
            <BuildingLibraryIcon className="w-4 h-4"></BuildingLibraryIcon>
          </span>
          <span>BD GADGETS</span>
        </Link>
      </div>
      <ul className="flex flex-col md:flex-row gap-10">
        <NavLink
          to="/"
          className={({ isActive }) => isActive && 'text-sky-500'}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => isActive && 'text-sky-500'}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => isActive && 'text-sky-500'}
        >
          Cart
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive && 'text-sky-500'}
        >
          About Us
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
