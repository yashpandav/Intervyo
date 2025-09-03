"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Navigation Component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-teal-500 text-white px-3 py-2 rounded-lg font-bold text-lg">
                Intervyo
              </div>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-500 transition-colors duration-200">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors duration-200">How it Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-teal-500 transition-colors duration-200">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-500 transition-colors duration-200">Contact</a>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-all duration-200 hover:scale-105">
                Get Started
              </button>
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-teal-500">Features</a>
                <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-teal-500">How it Works</a>
                <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-teal-500">Pricing</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-500">Contact</a>
                <button className="w-full mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;