import React from 'react';
import { motion } from 'framer-motion';

/**
 * Testimonials section.
 *
 * Features a grid of client feedback cards.  Each testimonial shares a
 * positive experience from a satisfied client, enhancing trust and
 * credibility.  A placeholder avatar accompanies each review.
 */
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun S.',
      feedback: 'Vastu Interior Studio transformed our 3BHK apartment into a luxurious haven. Their attention to detail and understanding of our needs was remarkable.',
    },
    {
      name: 'Neha P.',
      feedback: 'From planning to execution, the team delivered beyond expectations. The space feels so harmonious and beautiful now!',
    },
    {
      name: 'Rahul K.',
      feedback: 'Professional, punctual and creative. Our office redesign was seamless and the 3D preview made decision‑making easy.',
    },
    {
      name: 'Priya M.',
      feedback: 'Excellent vastu consultation coupled with modern aesthetics. Highly recommend their services!',
    },
  ];
  return (
    <section id="testimonials" className="py-20 px-4 bg-warmWhite">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        >
          Client&nbsp;Testimonials
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow p-6 flex flex-col"
            >
              <p className="text-gray-700 italic mb-4">"{test.feedback}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500">Home Owner</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;