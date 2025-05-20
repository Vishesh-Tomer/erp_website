import { motion } from 'framer-motion';

export default function AIRelatedData() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={sectionVariants}
      className="py-16 px-10 bg-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">
            AI-Powered School Management
          </h2>
          <p className="text-lg mb-6 text-secondary">
            Leverage the power of AI to enhance learning outcomes with personalized learning paths, predictive analytics for student performance, and automated administrative tasks. Our ERP system uses advanced AI to make your school smarter and more efficient.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-secondary">
            <li>Personalized Learning Recommendations</li>
            <li>Predictive Analytics for Student Success</li>
            <li>Automated Attendance and Grading</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <video
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            controls
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
}