import React from "react";
import { Link } from "react-router-dom";
import sditechLogo from "../../assets/logos/sditech.png";

function Header() {
  return (
    <aside className="border-r rounded-r-lg border-gray-200 rw-64 bg-black text-white shadow-lg flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <img
          src={sditechLogo}
          alt="SDITech logo"
          className="hover:-translate-y-1 transition-transform duration-500 h-10 w-auto object-contain"
        />
        
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-4 font-medium">

          <li>
            <Link
              to="/"
              className="block py-2 px-3 rounded-lg border  transition btn-hover"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/lost&found"
              className="block py-2 px-3 rounded-lg transition btn-hover"
            >
              Lost & Found
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="block py-2 px-3 rounded-lg transition btn-hover"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/announcements"
              className="block py-2 px-3 rounded-lg btn-hover transition"
            >
              Announcements
            </Link>
          </li>

        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 font-medium hover:bg-gray-900 transition text-center"
        >
          Login
        </Link>
        <Link
          to="/signp"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-center"
        >
          Sign Up
        </Link>
      </div>
    </aside>
  );
}

export default Header;
