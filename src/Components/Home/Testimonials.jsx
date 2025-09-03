"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonials Section
const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    const testimonials = [
      {
        name: "Sarah Chen",
        role: "HR Director",
        company: "TechCorp",
        content: "Intervyo reduced our screening time by 80%. The AI insights are incredibly accurate and help us identify top talent quickly.",
        rating: 5
      },
      {
        name: "Michael Rodriguez",
        role: "Talent Acquisition Manager",
        company: "StartupXYZ",
        content: "The best hiring tool we've used. The AI interviews feel natural and provide deeper insights than traditional screening methods.",
        rating: 5
      },
      {
        name: "Emily Johnson",
        role: "Recruiting Lead",
        company: "GlobalTech",
        content: "Game-changer for our hiring process. We've improved our hire quality by 40% since implementing Intervyo.",
        rating: 5
      }
    ];
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of companies worldwide
            </p>
          </div>
  
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
  
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
  
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TestimonialsSection;