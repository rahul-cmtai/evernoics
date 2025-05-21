'use client'

import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-3xl mx-auto py-16 px-4 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Why Choose Us</h2>
    <p className="text-lg text-[var(--color-foreground)]">
      Proven expertise, innovative solutions, and a client-first approach—discover why leading businesses trust Everonic Solutions for their digital transformation.
    </p>
  </motion.section>
);

export default WhyChooseUs;

