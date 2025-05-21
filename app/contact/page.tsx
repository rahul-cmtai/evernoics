'use client'

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className=" mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center py-16"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">Contact Us</h1>
      <p className="text-lg md:text-xl text-[var(--color-foreground)] max-w-2xl mb-8">
        Have questions or want to work with us? Fill out the form below and our team will get back to you soon.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full flex justify-center"
      >
        <form className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-[var(--color-primary)]">Name</label>
            <input id="name" name="name" type="text" required className="px-4 py-2 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-[var(--color-primary)]">Email</label>
            <input id="email" name="email" type="email" required className="px-4 py-2 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="subject" className="font-semibold text-[var(--color-primary)]">Subject</label>
            <input id="subject" name="subject" type="text" required className="px-4 py-2 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="font-semibold text-[var(--color-primary)]">Message</label>
            <textarea id="message" name="message" rows={5} required className="px-4 py-2 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition resize-none" />
          </div>
          <div className="md:col-span-2 flex justify-center mt-2">
            <button type="submit" className="px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg shadow hover:bg-[var(--color-accent)] transition-all">Send Message</button>
          </div>
        </form>
      </motion.div>
      <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100 mt-4">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019857512!2d-122.4194151846817!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4a0b8b8b8b8b8b8b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.section>
  );
};

export default ContactPage;
