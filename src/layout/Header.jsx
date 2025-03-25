import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center gap-4 h-[100px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-pink-600 px-2 py-4" : "px-2 py-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-pink-600 px-2 py-4" : "px-2 py-4"
          }
        >
          Movies
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
