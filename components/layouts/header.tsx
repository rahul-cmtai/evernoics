'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/features', label: 'Features' },
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="w-full bg-white shadow z-20 relative"
  >
    <div className="container mx-auto flex justify-between items-center px-4 py-2">
      <Link href="/">
        {/* <Image src="/logo.png" alt="Everonic Solutions" width={100} height={100} /> */}
      <div className="text-xl font-extrabold text-[var(--color-primary)] tracking-tight">Location Tracker</div>
      </Link>
      <nav className="flex gap-6 text-[var(--color-primary)] font-semibold items-center">

        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="px-1 py-0.5 transition hover:text-[var(--color-accent)] hover:underline underline-offset-4"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/login"
          className="ml-3 rounded-full px-4 py-1.5 bg-[var(--color-primary)] text-white font-semibold border border-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition"
        >
          User Login
        </a>
      </nav>
    </div>
  </motion.header>
);

export default Header;
