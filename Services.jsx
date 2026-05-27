import React from 'react';
import { motion } from 'framer-motion';

/**
 * Services section.
 *
 * Displays a grid of service cards highlighting the studio’s
 * capabilities—from full interior design and Vastu consultation to
 * specialised offerings like modular kitchens, 3D visualisation and
 * renovation. Each card gently animates into view on scroll.
 */
const Services = () => {
  const services = [
    {
      title: 'Interior Design',
      description: 'Complete residential and commercial interior design solutions.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },
    {
      title: 'Vastu Consultation',
      description: 'Align your space with the energy of Vastu Shastra for prosperity and wellbeing.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      ),
    },
    {
      title: 'Modular Kitchen',
      description: 'Elegant, functional modular kitchens custom built for your home.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16M5 20v-3m14 3v-3" />
        </svg>
      ),
    },
    {
      title: 'Bedroom Interior',
      description: 'Cozy and stylish bedroom designs tailored to your taste.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12l2-2m0 4l-2-2m16 0l2-2m0 4l-2-2" />
        </svg>
      ),
    },
    {
      title: 'Living Room Design',
      description: 'Beautiful living spaces that bring families together.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18v10H3V10z" />
        </svg>
      ),
    },
    {
      title: 'Office Interior',
      description: 'Productive and inspiring office environments.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v8H3V3zM3 13h8v8H3v-8zM13 13h8v8h-8v-8z" />
        </svg>
      ),
    },
    {
      title: '3D Visualisation',
      description: 'See your dream space come alive with stunning 3D renders.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4-8 4-8-4 8-4zM4 12l8 4 8-4" />
        </svg>
      ),
    },
    {
      title: 'Space Planning',
      description: 'Optimise layouts for comfort, flow and efficient use of space.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces into modern masterpieces.',
      icon: (
        <svg className="h-8 w-8 text-gold mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-gray-800"
        >
          Our&nbsp;Services
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;