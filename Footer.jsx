import React from 'react';

/**
 * Footer component.
 *
 * Provides a simple footer with quick links, contact details and a
 * copyright notice.  The colour palette mirrors the dark, luxurious
 * accents used throughout the site.
 */
const Footer = () => {
  return (
    <footer className="bg-dark text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gold">Vastu&nbsp;Interior&nbsp;Studio</h3>
          <p className="text-gray-400 mb-3">Designing&nbsp;Dreams, Crafting&nbsp;Homes</p>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vastu Interior Studio. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <div>
            <h4 className="font-semibold mb-2 text-gold">Quick&nbsp;Links</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#about" className="hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gold">Reach&nbsp;Us</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Shop&nbsp;No.&nbsp;1, Krishna&nbsp;Complex</li>
              <li>Krishna&nbsp;Nagar, Satna</li>
              <li>Madhya&nbsp;Pradesh&nbsp;485001</li>
              <li>Phone: +91&nbsp;93402&nbsp;05929</li>
              <li>Email: info@vastuinteriorstudio.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;