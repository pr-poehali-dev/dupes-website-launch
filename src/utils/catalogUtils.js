import { 
  capProduct, 
  hoodieProduct, 
  windbreakerProduct, 
  tshirtProduct, 
  longsleeveProducts, 
  sneakersProducts 
} from '@/data/products';
import { categories } from '@/data/categories';

export const getCategoryProducts = (categoryId) => {
  switch (categoryId) {
    case 'hoodies':
      return [hoodieProduct, {
        ...hoodieProduct,
        id: 101,
        name: "Худи Supreme Classic",
        price: "2800₽"
      }, {
        ...hoodieProduct,
        id: 102,
        name: "Худи Off-White Basic",
        price: "3500₽"
      }];
    case 'windbreakers':
      return [windbreakerProduct, {
        ...windbreakerProduct,
        id: 103,
        name: "Ветровка Nike Windrunner",
        price: "2500₽"
      }, {
        ...windbreakerProduct,
        id: 104,
        name: "Ветровка Adidas Classic",
        price: "3200₽"
      }];
    case 'tshirts':
      return [tshirtProduct, {
        ...tshirtProduct,
        id: 105,
        name: "Футболка Nike Basic",
        price: "1800₽"
      }, {
        ...tshirtProduct,
        id: 106,
        name: "Футболка Adidas Sport",
        price: "2200₽"
      }];
    case 'longsleeves':
      return longsleeveProducts;
    case 'sneakers':
      return sneakersProducts;
    case 'caps':
      return [capProduct, {
        ...capProduct,
        id: 107,
        name: "Кепка Nike Classic",
        price: "1200₽"
      }, {
        ...capProduct,
        id: 108,
        name: "Кепка Adidas Sport",
        price: "2000₽"
      }];
    default:
      return [];
  }
};

export const getCategoryTitle = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : '';
};

export const getProductsByCategory = (selectedProduct, longsleeveProducts, sneakersProducts) => {
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