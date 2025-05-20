"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'react-feather';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkVariants = {
    hover: { scale: 1.1, color: '#002147', transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=150&h=50&fit=crop"
                alt="School ERP Logo"
                className="h-10 rounded-md"
              />
            </Link>
            <span className="text-2xl font-bold text-primary">School ERP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div variants={linkVariants} whileHover="hover">
              <Link href="/features" className="text-secondary font-medium">
                Features
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link href="/about" className="text-secondary font-medium">
                About
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link href="/priority" className="text-secondary font-medium">
                Priority
              </Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link href="/contact" className="text-secondary font-medium">
                Contact Us
              </Link>
            </motion.div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
            >
              Request a Demo
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/features" className="text-secondary hover:text-primary font-medium">
                Features
              </Link>
              <Link href="/about" className="text-secondary hover:text-primary font-medium">
                About
              </Link>
              <Link href="/priority" className="text-secondary hover:text-primary font-medium">
                Priority
              </Link>
              <Link href="/contact" className="text-secondary hover:text-primary font-medium">
                Contact Us
              </Link>
              <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition">
                Request a Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}