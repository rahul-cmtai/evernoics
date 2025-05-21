'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-[var(--color-background)] py-16"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] mb-4 drop-shadow-sm">
        Empowering Your Business with <span className="text-[var(--color-accent)]">Smart IT Solutions</span>
      </h1>
      <p className="text-lg md:text-2xl text-[var(--color-foreground)] mb-8 max-w-2xl">
        Unlock growth, efficiency, and innovation with our award-winning consultancy and technology services.
      </p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg shadow hover:bg-[var(--color-accent)] transition"
      >
        Get Started
      </motion.a>
    </motion.section>
  );
};

export default HeroSection;

