import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto p-4 bg-amber-400">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-black">
          <a href="#" className="text-2xl md:text-3xl lg:text-4xl">
            CollegeQuery
          </a>
        </div>

        <button
          id="menu"
          className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-800 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
          aria-expanded="false"
          aria-label="open-menu"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </button>
        <div
          className={`${
            open ? "visible" : "hidden"
          } flex flex-col gap-4 absolute right-0 left-0 top-14 bg-amber-400 text-lg font-medium shadow-xl text-center p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full z-50`}
          role="menubar"
        >
          <a
            href="/"
            role="menuitem"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-800 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors py-1 px-6 lg:ml-auto"
          >
            Home
          </a>
          <a
            href="/"
            role="menuitem"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-800 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors py-1 px-6 "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
