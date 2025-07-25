import { useState } from 'react';
import ProductModal from './ProductModal';
import CatalogHeader from './catalog/CatalogHeader';
import CategoryCard from './catalog/CategoryCard';
import { categories } from '@/data/categoriesData';
import { useCatalogHandlers } from '@/hooks/useCatalogHandlers';
import { getProductsForModal } from '@/utils/productUtils';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { handleCategoryClick, closeProductModal } = useCatalogHandlers(setSelectedProduct);

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