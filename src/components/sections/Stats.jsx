"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  const animateNumber = (endValue) => ({
    initial: { value: 0 },
    animate: inView ? { value: endValue } : { value: 0 },
    transition: { duration: 2 },
    children: ({ value }) => Math.floor(value),
  });

  return (
    <section ref={ref} className="py-16 px-10 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-3xl font-bold text-center mb-4 text-primary"
      >
        Our Impact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-center mb-10 text-secondary"
      >
        See how we’ve transformed schools worldwide.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
        >
          <motion.h3
            {...animateNumber(500)}
            className="text-4xl font-bold text-primary"
          />
          <p className="text-sm mt-2 text-secondary">Schools Served</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
        >
          <motion.h3
            {...animateNumber(10000)}
            className="text-4xl font-bold text-primary"
          />
          <p className="text-sm mt-2 text-secondary">Students Managed</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
        >
          <motion.h3
            {...animateNumber(2000)}
            className="text-4xl font-bold text-primary"
          />
          <p className="text-sm mt-2 text-secondary">Teachers Supported</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
        >
          <motion.h3
            {...animateNumber(95)}
            className="text-4xl font-bold text-primary"
          />
          <p className="text-sm mt-2 text-secondary">Satisfaction Rate (%)</p>
        </motion.div>
      </div>
    </section>
  );
}