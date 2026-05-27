import React from 'react';
import { motion } from 'framer-motion';

/**
 * About section.
 *
 * This section provides a narrative about the ethos and philosophy of
 * Vastu Interior Studio, blending modern interior aesthetics with Vastu
 * Shastra principles.  The content emphasises personalised design and
 * craftsmanship tailored to each client’s lifestyle.
 */
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-warmWhite text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
        >
          About&nbsp;Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-relaxed text-lg text-gray-700"
        >
          Vastu Interior Studio is a premier interior design and vastu
          consultation firm based in Satna, Madhya&nbsp;Pradesh. Our passion
          lies in creating harmonious living and working spaces that blend
          modern aesthetics with the timeless principles of Vastu Shastra.
          Every project begins with a deep understanding of our clients’
          lifestyle, aspirations and cultural values.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 leading-relaxed text-lg text-gray-700"
        >
          Our team of experienced architects, designers and craftsmen craft
          bespoke interiors that are functional, elegant and aligned with
          positive energy. From modular kitchens and bedroom makeovers to
          complete home and office transformations, we deliver personalised
          design solutions that combine luxury, practicality and the guiding
          wisdom of Vastu. We pride ourselves on meticulous attention to
          detail, quality workmanship and a personalised approach, ensuring
          each space reflects the unique vision of its owner.
        </motion.p>
      </div>
    </section>
  );
};

export default About;