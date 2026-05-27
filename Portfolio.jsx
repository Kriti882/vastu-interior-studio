import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import bedroomImg from '../assets/bedroom.png';
import kitchenImg from '../assets/kitchen.png';
import officeImg from '../assets/office.png';
import vastuImg from '../assets/vastu.png';

/**
 * Portfolio section.
 *
 * Displays a masonry‑style gallery of concept art images.  Clicking an
 * image opens a simple lightbox overlay to view the image full screen.
 */
const Portfolio = () => {
  const images = [
    { src: heroImg, alt: 'Luxury Living Room' },
    { src: bedroomImg, alt: 'Modern Bedroom' },
    { src: kitchenImg, alt: 'Elegant Kitchen' },
    { src: officeImg, alt: 'Office Interior' },
    { src: vastuImg, alt: 'Vastu Inspired Design' },
  ];
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section id="portfolio" className="py-20 px-4 bg-warmWhite">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        >
          Our&nbsp;Portfolio
        </motion.h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90"
                onClick={() => openLightbox(idx)}
              />
            </div>
          ))}
        </div>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 no-scrollbar"
            onClick={closeLightbox}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-full max-w-full rounded"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;