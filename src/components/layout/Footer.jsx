"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const iconVariants = {
    hover: { scale: 1.2, color: '#002147', transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=150&h=50&fit=crop"
                alt="School ERP Logo"
                className="h-10 rounded-md mb-4"
              />
            </Link>
            <p className="text-sm text-white">
              A comprehensive solution to manage your school’s operations with ease. Powered by AI to enhance learning and administration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white hover:text-secondary transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-secondary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/priority" className="text-white hover:text-secondary transition">
                  Priority
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-secondary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 text-white">
              <li>Email: support@schoolerp.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Education Lane, Tech City, USA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4 text-white">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 bg-white text-primary rounded-md hover:bg-secondary hover:text-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaFacebook className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaTwitter className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaLinkedin className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaInstagram className="w-6 h-6 text-white" />
          </motion.a>
        </div>
        <div className="border-t border-secondary my-8"></div>
        <div className="text-center text-sm text-white">
          <p>© {new Date().getFullYear()} School ERP. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}