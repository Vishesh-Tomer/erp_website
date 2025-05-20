"use client";

import { motion } from 'framer-motion';
import { FaUser, FaClock, FaCalendar, FaMoneyBill } from 'react-icons/fa';

export default function Features() {
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        Our Features
      </h2>
      <p className="text-center mb-10 text-secondary">
        Discover the tools that make school management effortless and efficient with our AI-powered system.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaUser className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Student Information</h3>
          <p className="text-sm mt-2 text-secondary">
            Easily manage student records, including personal details, grades, attendance history, and more in a centralized system.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaClock className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Attendance Tracking</h3>
          <p className="text-sm mt-2 text-secondary">
            Automate attendance tracking with AI-powered facial recognition or manual entry, ensuring accuracy and saving time.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaCalendar className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Timetable Management</h3>
          <p className="text-sm mt-2 text-secondary">
            Create, edit, and manage class schedules with ease, ensuring no conflicts and optimal use of resources.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaMoneyBill className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Fee Management</h3>
          <p className="text-sm mt-2 text-secondary">
            Simplify fee collection, track payments, send reminders, and generate reports with our integrated fee management system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}