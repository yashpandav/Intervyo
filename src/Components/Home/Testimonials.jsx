"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = useMemo(() => [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechCorp",
      content:
        "Intervyo reduced our screening time by 80%. The AI insights are incredibly accurate and help us identify top talent quickly.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Software Engineer",
      company: "Candidate",
      content:
        "Intervyo felt just like a real interview. It helped me prepare and boosted my confidence.",
      rating: 5,
    },
    {
      name: "David Lee",
      role: "Product Manager",
      company: "Candidate",
      content:
        "This was better than a mock interview. The AI asked role-specific questions and gave me clear feedback — exactly what I needed before my actual interview.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Talent Acquisition Manager",
      company: "StartupXYZ",
      content:
        "The best hiring tool we've used. The AI interviews feel natural and provide deeper insights than traditional screening methods.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Recruiting Lead",
      company: "GlobalTech",
      content:
        "Game-changer for our hiring process. We've improved our hire quality by 40% since implementing Intervyo.",
      rating: 5,
    },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedTestimonials = useMemo(() => {
    if (testimonials.length === 0) return [];
    const firstClone = testimonials[0];
    const lastClone = testimonials[testimonials.length - 1];
    return [lastClone, ...testimonials, firstClone];
  }, [testimonials]);

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedTestimonials.length - 1) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        if (currentIndex === 0) {
          setCurrentIndex(testimonials.length);
        } else if (currentIndex === extendedTestimonials.length - 1) {
          setCurrentIndex(1);
        }
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonials.length, extendedTestimonials.length]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const getActiveDotIndex = () => {
    if (currentIndex === 0) return testimonials.length - 1;
    if (currentIndex === extendedTestimonials.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    // RESPONSIVE CHANGE: Adjusted vertical padding for different screen sizes
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* RESPONSIVE CHANGE: Adjusted horizontal padding */}
        <div className="text-center mb-10 sm:mb-12">
          {/* RESPONSIVE CHANGE: Made heading smaller on mobile */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-700 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transitionEnabled ? "transform 700ms ease-in-out" : "none",
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              // RESPONSIVE CHANGE: Adjusted horizontal padding inside the slide
              <div
                key={index}
                className="w-full flex-shrink-0 px-8 sm:px-12"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <div className="flex justify-center mb-5 sm:mb-6">
                    {/* RESPONSIVE CHANGE: Made stars smaller on mobile */}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-teal-500 fill-teal-500"
                        size={24} // Adjusted from 28
                      />
                    ))}
                  </div>
                  {/* RESPONSIVE CHANGE: Made blockquote text smaller on mobile */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-bold text-base sm:text-lg lg:text-xl text-teal-800">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {testimonial.role} at{" "}
                      <span className="font-medium text-teal-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* RESPONSIVE CHANGE: Adjusted button size, padding, and position for mobile */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white border border-teal-200 rounded-full p-2 sm:p-3 shadow-md hover:bg-teal-50 transition-all z-10"
          >
            <ChevronLeft size={24} className="text-teal-600" /> {/* Made icon smaller */}
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 bg-white border border-teal-200 rounded-full p-2 sm:p-3 shadow-md hover:bg-teal-50 transition-all z-10"
          >
            <ChevronRight size={24} className="text-teal-600" /> {/* Made icon smaller */}
          </button>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 1)}
              className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === getActiveDotIndex()
                  ? "bg-teal-600"
                  : "bg-teal-100 hover:bg-teal-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;