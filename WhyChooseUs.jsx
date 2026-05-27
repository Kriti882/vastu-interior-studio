import React from 'react';
import { motion } from 'framer-motion';

/**
 * Why Choose Us section.
 *
 * Highlights the key differentiators of Vastu Interior Studio.  Each
 * feature card succinctly conveys a benefit and animates into view when
 * scrolled into the viewport.
 */
const WhyChooseUs = () => {
  const features = [
    {
      title: 'Customised Designs',
      description: 'Every project is tailored to your unique taste and requirements.',
    },
    {
      title: 'Budget Friendly',
      description: 'Luxury doesn’t have to be expensive – we optimise cost without compromising quality.',
    },
    {
      title: 'Modern & Luxury Concepts',
      description: 'Sleek, contemporary designs that exude opulence.',
    },
    {
      title: 'Vastu‑Compliant Planning',
      description: 'We harmonise spaces according to Vastu Shastra to promote wellbeing.',
    },
    {
      title: 'Experienced Team',
      description: 'A passionate team of designers, architects and craftsmen with years of expertise.',
    },
    {
      title: '3D Design Preview',
      description: 'Visualise your dream space through realistic 3D renders before execution.',
    },
  ];
  return (
    <section id="why-us" className="py-20 px-4 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-gray-800"
        >
          Why&nbsp;Choose&nbsp;Us
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feat.title}
              </h3>
              <p className="text-gray-600">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;