"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "This service transformed our business. The results exceeded our expectations and the team was incredibly professional throughout the process.",
      avatar: "/avatars/1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, TechStart",
      content:
        "We've tried many solutions, but none delivered like this one. The attention to detail and customer support is unmatched in the industry.",
      avatar: "/avatars/2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      content:
        "The implementation was seamless and the ongoing support has been exceptional. Our productivity has increased by 40% since we started using this.",
      avatar: "/avatars/3.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CTO",
      content:
        "Reliable, scalable, and cost-effective. Exactly what our growing company needed to streamline operations without breaking the bank.",
      avatar: "/avatars/4.jpg",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Director",
      content:
        "The onboarding process was so smooth. We were up and running in days, not weeks. The team anticipated all our needs before we even asked.",
      avatar: "/avatars/5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToIndex = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get current, next, and previous testimonials
  const getVisibleTestimonials = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto py-12  ">
      <div className="mb-12">
        <div className="flex w-full justify-between items-center flex-wrap max-md:justify-center max-md:text-center gap-4">
          <div className="text-5xl font-sans font-bold max-md:text-4xl flex flex-col">
            What our{" "}
            <span>
              <span className="text-blue-600">clients</span> say
            </span>
          </div>
          <div className="flex gap-4 max-md:flex-col">
            <div className="text-sm font-medium text-gray-600 hover:text-blue-500 transition">
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                  aria-label="Previous testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToIndex(index)}
                      className={`w-3 h-3 rounded-full transition ${
                        currentIndex === index
                          ? "bg-blue-600 w-6"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                  aria-label="Next testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden h-96">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: index === 1 ? 1 : 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white p-8 rounded-xl shadow-lg ${
                    index === 1
                      ? "border-2 border-blue-500"
                      : "border border-gray-200 opacity-90"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
