'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HowWeAre: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-3xl mx-auto py-16 px-4 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Who We Are</h2>
    <p className="text-lg text-[var(--color-foreground)]">
      We are a passionate team of IT experts, strategists, and innovators dedicated to helping your business grow with smart, scalable, and secure technology solutions.
    </p>
  </motion.section>
);

export default HowWeAre;

