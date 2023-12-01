import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { CartsContext } from '../../App';
import { useContext, useState } from 'react';
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const [carts] = useContext(CartsContext);
  const [isOpen, setIsopen] = useState(false);
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
      <span
        onClick={() => setIsopen(!isOpen)}
        className="lg:hidden cursor-pointer "
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </span>
      <ul
        className={`flex flex-col justify-center items-center lg:static duration-500 absolute -top-96 w-full  lg:w-fit ${
          isOpen ? 'top-20 p-5 bg-white' : '-top-96'
        } lg:flex-row gap-10`}
      >
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
          <span className="flex">
            <ShoppingCartIcon className="w-6 h-6" />
            <sup>{carts.length}</sup>
          </span>
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
