'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Testimonial: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-2xl mx-auto py-16 px-4 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">What Our Clients Say</h2>
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow p-8 border border-gray-100 transition mx-auto"
    >
      <p className="text-lg text-[var(--color-foreground)] italic mb-4">“Everonic Solutions transformed our business with their innovative IT strategies. Highly recommended!”</p>
      <div className="font-bold text-[var(--color-primary)]">— Happy Client</div>
    </motion.div>
  </motion.section>
);

export default Testimonial;

