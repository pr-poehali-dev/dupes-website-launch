import { 
  capProduct, 
  hoodieProduct, 
  windbreakerProduct, 
  tshirtProduct, 
  longsleeveProducts, 
  sneakersProducts 
} from '@/data/productsData';

export const useCatalogHandlers = (setSelectedProduct) => {
  const openHoodieModal = () => {
    setSelectedProduct(hoodieProduct);
  };

  const openWindbreakerModal = () => {
    setSelectedProduct(windbreakerProduct);
  };

  const openTshirtModal = () => {
    setSelectedProduct(tshirtProduct);
  };

  const openLongsleeveModal = () => {
    setSelectedProduct(longsleeveProducts[0]);
  };

  const openSneakersModal = () => {
    setSelectedProduct(sneakersProducts[0]);
  };

  const openCapModal = () => {
    setSelectedProduct(capProduct);
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'hoodies') {
      openHoodieModal();
    } else if (categoryId === 'windbreakers') {
      openWindbreakerModal();
    } else if (categoryId === 'tshirts') {
      openTshirtModal();
    } else if (categoryId === 'longsleeves') {
      openLongsleeveModal();
    } else if (categoryId === 'sneakers') {
      openSneakersModal();
    } else if (categoryId === 'caps') {
      openCapModal();
    } else {
      const catalogSection = document.getElementById(categoryId);
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return {
    handleCategoryClick,
    closeProductModal
  };
};