/**
 * Tailwind CSS configuration for the Vastu Interior Studio website.
 *
 * This file defines a bespoke colour palette inspired by luxurious
 * interiors – warm whites, beiges, matte gold and deep charcoals – and
 * enables the JIT compiler to pick up on our project’s source files.
 */
module.exports = {
  content: [
    './index.html',
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f7efe3',
        warmWhite: '#faf8f3',
        gold: '#c8a96a',
        dark: '#1a1a1a',
      },
    },
  },
  plugins: [],
};