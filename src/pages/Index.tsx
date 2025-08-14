
import { useState, useEffect } from "react";
import ProgramAgreementDialog from "@/components/shared/ProgramAgreementDialog";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import LearnSection from "@/components/home/LearnSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [showAgreement, setShowAgreement] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      disable: 'mobile' // Better performance on mobile
    });
    
    // Update AOS on resize for better mobile experience
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-lavender-50 to-blue-50">
      <Helmet>
        <title>CodeSisters | Empowering Women in Tech</title>
        <meta name="description" content="CodeSisters is a vibrant space for women in technology to learn, grow, and connect. Join the sisterhood." />
        <meta name="keywords" content="CodeSisters, women in tech, coding, female coders, programming community" />
      </Helmet>
      
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection onShowAgreement={() => setShowAgreement(true)} />

      {/* Mission Section */}
      <MissionSection />
      
      {/* Learn to Code Section */}
      <LearnSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Form */}
      <ContactSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      <ProgramAgreementDialog 
        open={showAgreement}
        onOpenChange={setShowAgreement}
      />
    </div>
  );
};

export default Index;
