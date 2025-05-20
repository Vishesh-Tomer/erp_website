"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Principal, ABC School",
      quote: "This ERP system has transformed how we manage our school. The AI features are a game-changer!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop",
    },
    {
      name: "Sarah Smith",
      role: "Teacher, XYZ Academy",
      quote: "The timetable and attendance tracking features have saved us so much time. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop",
    },
    {
      name: "Michael Brown",
      role: "Administrator, DEF Institute",
      quote: "Managing student records has never been easier. The support team is also fantastic!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        What Our Clients Say
      </h2>
      <p className="text-center mb-10 text-secondary">
        Hear from the schools that trust us.
      </p>
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mb-4 border-4 border-primary shadow-lg"
          />
          <p className="text-lg italic mb-4 text-secondary">"{testimonials[current].quote}"</p>
          <h3 className="text-xl font-semibold text-primary">{testimonials[current].name}</h3>
          <p className="text-sm text-secondary">{testimonials[current].role}</p>
        </motion.div>
        <button
          onClick={prevTestimonial}
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-secondary transition opacity-70 hover:opacity-100"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-secondary transition opacity-70 hover:opacity-100"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}