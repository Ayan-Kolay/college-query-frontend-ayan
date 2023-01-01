import React, { useState } from "react";
import { NavLink, useNavigate, Link, createSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NavbarLoggedIn = () => {
  let [open, setOpen] = useState(false);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const refreshTokenObject = JSON.parse(localStorage.getItem("user-info"));
      const refreshToken = {
        refresh_token: refreshTokenObject.data.refresh_token,
      };
      await fetch("/auth/logout", {
        method: "POST",
        body: JSON.stringify(refreshToken),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      // console.log("you are not logged in");
      window.alert("you are not logged in");
    }
  };  

  const handleSearch = async() => {
    navigate({
      pathname:"/search",
      search:createSearchParams({
        search:search
      }).toString()
    })
  }
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
          <div className="search">
            <input type="text" onChange={e=>setSearch(e.target.value)} placeholder="Search Answers Here" className="rounded-[8px] px-3"></input>
            <button onClick={handleSearch} className="bg-black text-white mx-3 px-4 py-1 rounded-[9px]" name="searched">Search</button>
          </div>
      <Link to="/"
          role="menuitem"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-800 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors py-1 px-6 lg:ml-auto"
          onClick={() => {
            handleClick();
          }}
        >
          Log out
     </Link>
    
          <a
            href="/compose"
            role="menuitem"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-800 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors py-1 px-6 "
          >
            Compose
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;

