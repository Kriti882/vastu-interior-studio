import React from 'react';

/**
 * Floating WhatsApp button.
 *
 * Adds a fixed action button to the bottom right corner of the page that
 * links to WhatsApp.  Useful for quick contact on mobile devices.
 */
const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/919340205929"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.68 11.68 0 0012 0C5.37 0 .02 5.34.02 11.95c0 2.1.55 4.13 1.59 5.93L0 24l6.23-1.59a11.94 11.94 0 005.75 1.46c6.63 0 12.02-5.34 12.02-11.95 0-3.2-1.27-6.22-3.48-8.44zM12 21.54c-1.86 0-3.68-.51-5.28-1.46l-.37-.21-3.7.95.99-3.6-.24-.38a9.47 9.47 0 01-1.44-5.08C2.96 6.38 7.98 1.76 12.07 1.76c2.5 0 4.85.97 6.62 2.72a9.17 9.17 0 012.75 6.47c0 5.2-4.5 9.4-9.44 9.4z" />
        <path d="M17.16 13.48l-2.43-.7a.71.71 0 00-.74.22l-.56.68a.71.71 0 01-.76.21 8.05 8.05 0 01-4.17-3.58.71.71 0 01.08-.75l.51-.63a.71.71 0 00.11-.74l-.77-2.2a.71.71 0 00-.65-.46h-.73a.71.71 0 00-.71.71c0 5.17 4.2 9.37 9.37 9.37a.71.71 0 00.71-.71v-.72a.71.71 0 00-.47-.66z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsapp;