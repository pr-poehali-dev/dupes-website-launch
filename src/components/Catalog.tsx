import { useState } from 'react';
import ProductModal from './ProductModal';
import CategoryPage from './CategoryPage';
import CatalogHeader from './catalog/CatalogHeader';
import CategoryCard from './catalog/CategoryCard';
import { categories } from '@/data/categoriesData';
import { getProductsForModal } from '@/utils/productUtils';
import { 
  capProduct, 
  hoodieProduct, 
  windbreakerProduct, 
  tshirtProduct, 
  longsleeveProducts, 
  sneakersProducts 
} from '@/data/productsData';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Функция для получения товаров по категории
  const getCategoryProducts = (categoryId) => {
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

  // Функция для получения названия категории
  const getCategoryTitle = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const closeCategoryPage = () => {
    setSelectedCategory(null);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  // Если выбрана категория, показываем страницу категории
  if (selectedCategory) {
    return (
      <CategoryPage
        title={getCategoryTitle(selectedCategory)}
        products={getCategoryProducts(selectedCategory)}
        onBack={closeCategoryPage}
      />
    );
  }

  return (
    <>
      <section id="catalog" className="py-16 bg-gray-50" data-section="catalog">
        <div className="container mx-auto px-4">
          <CatalogHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal}
          products={getProductsForModal(selectedProduct)}
          onProductChange={setSelectedProduct}
        />
      )}
    </>
  );
};

export default Catalog;