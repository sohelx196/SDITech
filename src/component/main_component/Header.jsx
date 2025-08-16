import React from "react";
import { NavLink, Link } from "react-router-dom";
import sditechLogo from "../../assets/logos/sditech.png";

import home from "../../assets/images/MainImg/home.png";
import events from "../../assets/images/MainImg/events.png";
import lostAndFound from "../../assets/images/MainImg/lostAndFound.png";
import user from "../../assets/images/MainImg/user.png";

function Header() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex border-r rounded-r-lg border-gray-50 w-64 bg-black text-white shadow-lg flex-col p-4">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-lg transition btn-hover filter in ${
                    isActive
                      ? "border border-blue-500 text-blue-400"
                      : "border border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lost&found"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-lg transition btn-hover ${
                    isActive
                      ? "border border-blue-500 text-blue-400"
                      : "border border-transparent"
                  }`
                }
              >
                Lost & Found
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-lg transition btn-hover ${
                    isActive
                      ? "border border-blue-500 text-blue-400"
                      : "border border-transparent"
                  }`
                }
              >
                Events
              </NavLink>
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
            to="/signup"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-center"
          >
            Sign Up
          </Link>
        </div>
      </aside>

      {/* Mobile Top Navbar */}
      <header className="rounded-md lg:hidden fixed top-0 left-0 w-full bg-black text-white border-b border-gray-700 shadow-md flex justify-between items-center px-4 py-2 z-50">
        {/* Logo */}
        <img
          src={sditechLogo}
          alt="SDITech logo"
          className="h-8 w-auto object-contain"
        />

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <Link
            to="/login"
            className="px-3 py-1 rounded-md border border-blue-500 text-blue-400 text-sm hover:bg-gray-900 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>
      

      {/* Mobile Bottom Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-700 shadow-lg">
        <ul className="flex justify-around items-center py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              <img src={home} alt="Home" className="h-5 w-5 mb-1 filter invert" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lost&found"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              <img src={lostAndFound} alt="Lost & Found" className="h-6 w-10 mb-1" />
              Lost
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              <img
                src={events}
                alt="Events"
                className=" h-6 w-6 mb-1"
              />
              Events
            </NavLink>
          </li>

          {/* Profile Section */}
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              <div className="h-6 w-6 mb-1 rounded-full flex items-center justify-center text-xs border">
                <img
                  src={user}
                  alt="Profile"
                  className="filter invert object-contain h-3 w-3"
                />
              </div>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
