'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-3xl mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center py-16"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">About Us</h1>
      <p className="text-lg md:text-xl text-[var(--color-foreground)] max-w-2xl">
        Everonic Solutions is an award-winning consultancy dedicated to helping businesses thrive in the digital age. Our team of experts delivers innovative IT solutions tailored to your unique needs, driving growth and efficiency.
      </p>
    </motion.section>
  );
};

export default AboutPage;
