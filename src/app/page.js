import "./globals.css";
import Navbar from '../Components/Home/Navigation/Navbar'
import HeroSection from '../Components/Home/Hero/Hero'
import FeaturesSection from '../Components/Home/Features/FeatureSection'
import Demo from '../Components/Home/Demo'
import TestimonialsSection from '../Components/Home/Testimonials'
import Footer from '../Components/Home/Footer'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Demo />
      <TestimonialsSection /> 
      <Footer />
    </div>
  );
}