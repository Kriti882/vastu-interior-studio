import React, { useState } from 'react';
import logo from '../assets/logo.png';

/**
 * Navigation bar component.
 *
 * A sticky navigation bar that stays fixed to the top of the viewport. It
 * contains anchor links to the sections of the site, and a collapsible
 * hamburger menu for mobile viewports.  The colour palette matches the
 * luxurious theme of the site with a translucent backdrop.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 text-gray-900">
          <img src={logo} alt="Vastu Interior Studio logo" className="h-8 w-auto" />
          <span className="text-2xl font-semibold">Vastu&nbsp;Interior&nbsp;Studio</span>
        </a>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#portfolio" className="hover:text-gold">Portfolio</a>
          <a href="#why-us" className="hover:text-gold">Why&nbsp;Us</a>
          <a href="#testimonials" className="hover:text-gold">Testimonials</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
        {/* Hamburger menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-800 hover:text-gold focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow">
          <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">About</a>
          <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">Services</a>
          <a href="#portfolio" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">Portfolio</a>
          <a href="#why-us" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">Why&nbsp;Us</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gold">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;