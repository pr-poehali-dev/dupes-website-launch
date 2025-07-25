import ProductModal from './ProductModal';
import CategoryPage from './CategoryPage';
import CatalogGrid from './catalog/CatalogGrid';
import { useCatalogState } from '@/hooks/useCatalogState';
import { getCategoryProducts, getCategoryTitle, getProductsByCategory } from '@/utils/catalogUtils';
import { longsleeveProducts, sneakersProducts } from '@/data/products';

const Catalog = () => {
  const {
    selectedProduct,
    selectedCategory,
    setSelectedProduct,
    openCategory,
    closeCategoryPage,
    closeProductModal
  } = useCatalogState();

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
      <CatalogGrid onCategorySelect={openCategory} />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal}
          products={getProductsByCategory(selectedProduct, longsleeveProducts, sneakersProducts)}
          onProductChange={setSelectedProduct}
        />
      )}
    </>
  );
};

export default Catalog;