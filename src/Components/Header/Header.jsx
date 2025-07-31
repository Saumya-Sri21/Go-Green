import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-[#8AA8D4] lg:p-3">
      <nav className="px-3 lg:px-5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Hamburger / Cross button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-[50px] font-medium text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-white" : "text-white/70"} hover:text-white`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-white" : "text-white/70"} hover:text-white`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-white" : "text-white/70"} hover:text-white`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Slide-in Menu with limited height */}
          <div
            className={`fixed top-2 right-2 w-52 bg-[#8AA8D4] rounded-lg shadow-md z-40 p-6 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <ul className="flex flex-col gap-4 text-white text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-white/70"} hover:text-white`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-white/70"} hover:text-white`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-white/70"} hover:text-white`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

         
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
