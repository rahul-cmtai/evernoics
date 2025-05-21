'use client'

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: 1, title: 'Consultation', desc: 'We understand your business needs and goals.' },
  { num: 2, title: 'Strategy', desc: 'We design a custom IT roadmap for your growth.' },
  { num: 3, title: 'Implementation', desc: 'We deliver and integrate solutions seamlessly.' },
  { num: 4, title: 'Support', desc: 'We provide ongoing support and optimization.' },
];

const HowItWorksPage: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-5xl mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center py-16"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-10">How It Works</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {steps.map((s) => (
        <motion.div
          key={s.title}
          whileHover={{ y: -6, boxShadow: '0 6px 24px rgba(243,112,33,0.10)' }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold text-lg mb-3">{s.num}</div>
          <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">{s.title}</h3>
          <p className="text-[var(--color-foreground)] text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default HowItWorksPage;
