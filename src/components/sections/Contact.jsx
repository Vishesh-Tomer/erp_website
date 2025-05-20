"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-16 px-10 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        Get in Touch
      </h2>
      <p className="text-center mb-10 text-secondary">
        Have questions? Fill out the form below, and we’ll get back to you soon!
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <form className="md:w-1/2 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-secondary rounded-md focus:ring-primary focus:border-primary"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-secondary rounded-md focus:ring-primary focus:border-primary"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full mt-1 p-2 border border-secondary rounded-md focus:ring-primary focus:border-primary"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}