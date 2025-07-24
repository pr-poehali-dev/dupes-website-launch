import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import Catalog from "@/components/Catalog";
import HoodiesSection from "@/components/HoodiesSection";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import SizesGuide from "@/components/SizesGuide";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-light/5 to-emerald-light/10">
      <Header />
      <HeroSection />
      <SpecialOffers />
      <Catalog />
      <HoodiesSection />
      <AboutSection />
      <DeliverySection />
      <SizesGuide />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;