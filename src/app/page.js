import "./globals.css";
import Navbar from '../Components/Home/Navigation/Navbar'
import HeroSection from '../Components/Home/Hero/Hero'
import FeaturesSection from '../Components/Home/Features/FeatureSection'
import Demo from '../Components/Home/Demo/Demo'
import TestimonialsSection from '../Components/Home/Testimonials'
import Footer from '../Components/Home/Footer'
import DemoHeadText from "@/Components/Home/Demo/DemoHeadText";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="bg-gradient-to-b from-white via-teal-50 to-emerald-50">
        <div className="relative z-10">
          <FeaturesSection />
        </div>
        <DemoHeadText/>
        <div className="pointer-events-none h-12 w-full bg-gradient-to-b from-transparent via-teal-50 to-emerald-50 blur-xl" />
        <div className="relative z-10">
          <Demo />
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </div>
  );
}