import { useState } from 'react';

export const useCatalogState = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const closeCategoryPage = () => {
    setSelectedCategory(null);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return {
    selectedProduct,
    selectedCategory,
    setSelectedProduct,
    openCategory,
    closeCategoryPage,
    closeProductModal
  };
};