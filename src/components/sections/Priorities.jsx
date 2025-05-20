import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaChartLine } from 'react-icons/fa';

export default function Priorities() {
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        Our Priorities
      </h2>
      <p className="text-center mb-10 text-secondary">
        We focus on what matters most to make your school thrive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaShieldAlt className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Security First</h3>
          <p className="text-sm mt-2 text-secondary">
            We prioritize the security of your data with robust encryption and compliance with global standards.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaGraduationCap className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Student Success</h3>
          <p className="text-sm mt-2 text-secondary">
            Our system is designed to enhance learning outcomes and support student growth through AI-driven insights.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center hover:border-primary transition"
        >
          <FaChartLine className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-primary">Efficiency</h3>
          <p className="text-sm mt-2 text-secondary">
            Streamline administrative tasks to save time and resources, allowing you to focus on education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}