import React from 'react';
import { motion } from 'framer-motion';

/**
 * Contact section.
 *
 * Provides a contact form, business details, social links and an embedded
 * Google map.  The form is non‑functional by default but can be
 * integrated with a backend or third‑party service.  Interactive
 * elements use accessible labels and links.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-gray-800"
        >
          Get&nbsp;in&nbsp;Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <form className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="button"
              className="bg-gold text-white px-6 py-3 rounded font-medium hover:bg-gold/90 transition"
            >
              Send&nbsp;Message
            </button>
          </form>
          {/* Contact details & map */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Contact&nbsp;Details</h3>
              <p className="text-gray-700 mb-2">
                Shop&nbsp;No.&nbsp;1,&nbsp;Krishna&nbsp;Complex,<br />
                Krishna&nbsp;Nagar, Satna,<br />
                Madhya&nbsp;Pradesh&nbsp;485001
              </p>
              <p className="text-gray-700 mb-2">
                Phone:&nbsp;
                <a href="tel:+919340205929" className="text-gold hover:underline">
                  +91&nbsp;93402&nbsp;05929
                </a>
              </p>
              <p className="text-gray-700">
                Email:&nbsp;
                <a href="mailto:info@vastuinteriorstudio.com" className="text-gold hover:underline">
                  info@vastuinteriorstudio.com
                </a>
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://wa.me/919340205929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700"
                  aria-label="WhatsApp"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.68 11.68 0 0012 0C5.37 0 .02 5.34.02 11.95c0 2.1.55 4.13 1.59 5.93L0 24l6.23-1.59a11.94 11.94 0 005.75 1.46c6.63 0 12.02-5.34 12.02-11.95 0-3.2-1.27-6.22-3.48-8.44zM12 21.54c-1.86 0-3.68-.51-5.28-1.46l-.37-.21-3.7.95.99-3.6-.24-.38a9.47 9.47 0 01-1.44-5.08C2.96 6.38 7.98 1.76 12.07 1.76c2.5 0 4.85.97 6.62 2.72a9.17 9.17 0 012.75 6.47c0 5.2-4.5 9.4-9.44 9.4z" />
                    <path d="M17.16 13.48l-2.43-.7a.71.71 0 00-.74.22l-.56.68a.71.71 0 01-.76.21 8.05 8.05 0 01-4.17-3.58.71.71 0 01.08-.75l.51-.63a.71.71 0 00.11-.74l-.77-2.2a.71.71 0 00-.65-.46h-.73a.71.71 0 00-.71.71c0 5.17 4.2 9.37 9.37 9.37a.71.71 0 00.71-.71v-.72a.71.71 0 00-.47-.66z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/vastu_interior_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.97.25 2.42.42.6.23 1.03.5 1.48.94s.72.88.94 1.48c.17.45.36 1.25.42 2.42.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.97-.42 2.42a3.4 3.4 0 01-.94 1.48c-.44.44-.88.72-1.48.94-.45.17-1.25.36-2.42.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.25-2.42-.42a3.4 3.4 0 01-1.48-.94 3.4 3.4 0 01-.94-1.48c-.17-.45-.36-1.25-.42-2.42C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.25-1.97.42-2.42.23-.6.5-1.03.94-1.48s.88-.72 1.48-.94c.45-.17 1.25-.36 2.42-.42C8.42 2.17 8.8 2.16 12 2.16m0-2.16C8.73 0 8.31.01 7.02.07c-1.29.06-2.18.27-2.95.57a5.47 5.47 0 00-1.97 1.29 5.47 5.47 0 00-1.29 1.97c-.3.77-.51 1.66-.57 2.95C.01 8.31 0 8.73 0 12c0 3.27.01 3.69.07 4.98.06 1.29.27 2.18.57 2.95.3.77.74 1.37 1.29 1.97.54.54 1.2.99 1.97 1.29.77.3 1.66.51 2.95.57 1.29.06 1.71.07 4.98.07s3.69-.01 4.98-.07c1.29-.06 2.18-.27 2.95-.57a5.47 5.47 0 001.97-1.29 5.47 5.47 0 001.29-1.97c.3-.77.51-1.66.57-2.95.06-1.29.07-1.71.07-4.98s-.01-3.69-.07-4.98c-.06-1.29-.27-2.18-.57-2.95a5.47 5.47 0 00-1.29-1.97 5.47 5.47 0 00-1.97-1.29c-.77-.3-1.66-.51-2.95-.57C15.69.01 15.27 0 12 0z" />
                    <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.4" cy="5.6" r="1.44" />
                  </svg>
                </a>
                <a
                  href="tel:+919340205929"
                  className="text-blue-600 hover:text-blue-700"
                  aria-label="Phone"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75zM5.75 1.5A4.25 4.25 0 001.5 5.75v12.5A4.25 4.25 0 005.75 22.5h12.5a4.25 4.25 0 004.25-4.25V5.75A4.25 4.25 0 0018.25 1.5H5.75z" />
                    <path d="M7.27 8.43a.75.75 0 00-1.04-.16 8.08 8.08 0 00-2.37 2.37.75.75 0 00.16 1.04l1.52 1.14a.75.75 0 00.89-.01l1.15-.94a.75.75 0 00.09-1.07L7.27 8.43zm5.24 1.36a.75.75 0 00-1.07-.09l-1.15.94a.75.75 0 00-.09 1.07l1.52 1.14a.75.75 0 00.89-.01l1.15-.94a.75.75 0 00.09-1.07l-1.34-1.04zm5.24 1.36a.75.75 0 00-1.07-.09l-1.15.94a.75.75 0 00-.09 1.07l1.52 1.14a.75.75 0 00.89-.01l1.15-.94a.75.75 0 00.09-1.07l-1.34-1.04z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <iframe
                title="Vastu Interior Studio Location"
                src="https://maps.google.com/maps?q=Shop%20No.1%20Krishna%20Complex%20Krishna%20Nagar%20Satna%20Madhya%20Pradesh&output=embed"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;