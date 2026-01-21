import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r shadow-sm p-5 h-screen">
      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded text-gray-700 font-medium
             hover:bg-gray-200 ${isActive ? "bg-blue-100 text-blue-700" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block px-3 py-2 rounded text-gray-700 font-medium
             hover:bg-gray-200 ${isActive ? "bg-blue-100 text-blue-700" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block px-3 py-2 rounded text-gray-700 font-medium
             hover:bg-gray-200 ${isActive ? "bg-blue-100 text-blue-700" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
