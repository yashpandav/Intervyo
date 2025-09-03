import "./globals.css";
import Navbar from '../Components/Home/Navigation'
import HeroSection from '../Components/Home/Hero'
import FeaturesSection from '../Components/Home/Features'
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