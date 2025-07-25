import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import InfiniteScrollCatalog from "@/components/InfiniteScrollCatalog";
import ProductModal from "@/components/ProductModal";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import { getProductsForModal } from "@/utils/productUtils";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-light/5 to-emerald-light/10">
      <Header />
      <HeroSection />
      <SpecialOffers />
      <InfiniteScrollCatalog onProductClick={handleProductClick} />
      <AboutSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal}
          products={getProductsForModal(selectedProduct)}
          onProductChange={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default Index;