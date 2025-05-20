"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 px-10 bg-white flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Simplify School Management
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-secondary mb-6"
        >
          Streamline your school’s operations with our AI-powered ERP system.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition"
        >
          Request a Demo
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 mt-8 md:mt-0"
      >
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
          alt="School Management"
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}