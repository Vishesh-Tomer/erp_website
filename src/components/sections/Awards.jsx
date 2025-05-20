import { motion } from 'framer-motion';

export default function Awards() {
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        Our Achievements
      </h2>
      <p className="text-center mb-10 text-secondary">
        Recognized for excellence in educational technology and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center bg-white text-primary hover:border-primary transition"
        >
          <img
            src="https://img.icons8.com/color/96/000000/trophy.png"
            alt="Best EdTech Award"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Best EdTech Solution 2024</h3>
          <p className="text-sm mt-2 text-secondary">Awarded by Global EdTech Summit</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center bg-white text-primary hover:border-primary transition"
        >
          <img
            src="https://img.icons8.com/color/96/000000/medal.png"
            alt="Innovation Award"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Innovation in AI 2023</h3>
          <p className="text-sm mt-2 text-secondary">Recognized by Tech Innovators</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="p-6 border border-secondary rounded-lg shadow-sm text-center bg-white text-primary hover:border-primary transition"
        >
          <img
            src="https://img.icons8.com/color/96/000000/certificate.png"
            alt="Excellence Award"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Excellence in ERP 2022</h3>
          <p className="text-sm mt-2 text-secondary">Awarded by Education Excellence Forum</p>
        </motion.div>
      </div>
    </section>
  );
}