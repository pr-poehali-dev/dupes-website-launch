import { longsleeveProducts, sneakersProducts } from '@/data/productsData';

export const getProductsForModal = (selectedProduct) => {
  if (selectedProduct.name.includes('longsleeve') || selectedProduct.name.includes('Essentials')) {
    return longsleeveProducts;
  }
  
  if (selectedProduct.name.includes('Кроссовки') || 
      selectedProduct.name.includes('Crocs') || 
      (selectedProduct.name.includes('Adidas') && !selectedProduct.name.includes('Ветровка')) || 
      selectedProduct.name.includes('New Balance') || 
      selectedProduct.name.includes('Nike')) {
    return sneakersProducts;
  }
  
  return [selectedProduct];
};