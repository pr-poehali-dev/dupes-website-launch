import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import Catalog from "@/components/Catalog";
import CapsSection from "@/components/CapsSection";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import SizesGuide from "@/components/SizesGuide";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'main' | 'caps'>('main');

  const handleGoToCaps = () => {
    setCurrentSection('caps');
  };

  const handleBackToMain = () => {
    setCurrentSection('main');
  };

  if (currentSection === 'caps') {
    return <CapsSection onBack={handleBackToMain} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-light/5 to-emerald-light/10">
      <Header />
      <HeroSection />
      <SpecialOffers />
      <Catalog onGoToCaps={handleGoToCaps} />
      <AboutSection />
      <DeliverySection />
      <SizesGuide />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;