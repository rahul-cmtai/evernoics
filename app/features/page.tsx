'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaChartLine, FaShieldAlt, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs className="text-3xl text-[var(--color-accent)]" />,
    title: 'Custom IT Solutions',
    desc: 'Tailored strategies and systems to fit your business goals.'
  },
  {
    icon: <FaChartLine className="text-3xl text-[var(--color-accent)]" />,
    title: 'Business Growth',
    desc: 'Unlock new opportunities and scale efficiently with our expertise.'
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[var(--color-accent)]" />,
    title: 'Security & Compliance',
    desc: 'Protect your data and ensure regulatory compliance.'
  },
  {
    icon: <FaUsers className="text-3xl text-[var(--color-accent)]" />,
    title: 'Expert Team',
    desc: 'Work with industry-leading professionals and innovators.'
  },
];

const FeaturesPage: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-6xl mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center py-16"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-10">Our Features</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {features.map((f) => (
        <motion.div
          key={f.title}
          whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(243,112,33,0.10)' }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100 transition"
        >
          {f.icon}
          <h3 className="mt-4 mb-2 text-xl font-semibold text-[var(--color-primary)]">{f.title}</h3>
          <p className="text-[var(--color-foreground)] text-sm">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default FeaturesPage;