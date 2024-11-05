import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = ["Home", "About", "Portfolio", "Experiance", "Contact"];

  return (
    <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fiexed fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">Shubham</h1>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8   font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:scale-105 duration-200 cursor-pointer "
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar and Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenu(!menu)}
            // accessibility feature for screen readers
            aria-label="Toggle menu"
            className="text-2xl"
          >
            {menu ? <IoClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col items-center space-y-3 text-lg font-medium mt-4">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-700">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
