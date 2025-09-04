"use client";
import { useRef, useState, useEffect } from "react";
import "./globals.css"
import Navbar from "../Components/Home/Navigation/Navbar";
import HeroSection from "../Components/Home/Hero/Hero";
import FeaturesSection from "../Components/Home/Features/FeatureSection";
import Demo from "../Components/Home/Demo/Demo";
import TestimonialsSection from "../Components/Home/Testimonials";
import Footer from "../Components/Home/Footer";
import DemoHeadText from "@/Components/Home/Demo/DemoHeadText";

export default function HomePage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const demoRef = useRef(null);
  const testimonialsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = {
    hero: heroRef,
    features: featuresRef,
    demo: demoRef,
    testimonials: testimonialsRef,
  };

  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target
          );
          if (sectionId) setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar
        onNavigate={handleScroll}
        sections={sectionRefs}
        activeSection={activeSection}
      />

      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div className="bg-gradient-to-b from-white via-teal-50 to-emerald-50">
        <div className="relative z-10" ref={featuresRef}>
          <FeaturesSection />
        </div>
        <DemoHeadText />
        <div className="pointer-events-none h-12 w-full bg-gradient-to-b from-transparent via-teal-50 to-emerald-50 blur-xl" />
        <div className="relative z-10" ref={demoRef}>
          <Demo />
        </div>
      </div>

      <div ref={testimonialsRef}>
        <TestimonialsSection />
      </div>

      <Footer />
    </div>
  );
}
