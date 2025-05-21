'use client'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: '#', icon: <FaFacebookF />, label: 'Facebook' },
  { href: '#', icon: <FaInstagram />, label: 'Instagram' },
  { href: '#', icon: <FaLinkedinIn />, label: 'LinkedIn' },
];

const Topbar = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="w-full bg-[var(--color-primary)] text-white text-xs md:text-sm shadow z-30"
  >
    <div className="container mx-auto flex justify-between items-center px-4 py-1 min-h-8">
      <div className="flex gap-2 items-center">
        <span className="hidden sm:inline">info@everonic.com</span>
        <span className="hidden sm:inline">|</span>
        <span>+91-12345-67890</span>
      </div>
      <div className="flex gap-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="hover:text-[var(--color-accent)] transition text-base md:text-lg"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Topbar;
