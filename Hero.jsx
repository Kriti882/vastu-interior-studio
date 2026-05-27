import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

/**
 * Hero section.
 *
 * A full‑screen landing section featuring a luxurious interior background,
 * compelling tagline and clear call‑to‑action buttons.  Animations are
 * provided by Framer Motion for a smooth entrance effect.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Designing&nbsp;Dreams,
          <br className="hidden sm:inline" /> Crafting&nbsp;Homes
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Your aesthetic future starts here
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-gold text-white font-medium rounded hover:bg-gold/90 transition"
          >
            Book Consultation
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white hover:text-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="https://wa.me/919340205929"
            className="px-8 py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;