import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { sneakersProducts } from '@/data/products.js';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
  discount?: string | null;
}

interface InfiniteScrollCatalogProps {
  onProductClick?: (product: Product) => void;
}

const InfiniteScrollCatalog = ({ onProductClick }: InfiniteScrollCatalogProps) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const ITEMS_PER_PAGE = 8; // 2 ряда по 4 карточки
  
  // Дублируем товары для создания большего каталога
  const allProducts = [...sneakersProducts, ...sneakersProducts, ...sneakersProducts].map((product, index) => ({
    ...product,
    id: product.id + index * 1000
  }));

  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const nextProducts = allProducts.slice(
        displayedProducts.length,
        displayedProducts.length + ITEMS_PER_PAGE
      );
      
      if (nextProducts.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedProducts(prev => [...prev, ...nextProducts]);
      }
      
      setIsLoading(false);
    }, 500);
  }, [displayedProducts.length, isLoading, hasMore, allProducts]);

  // Инициализация первой загрузки
  useEffect(() => {
    if (displayedProducts.length === 0) {
      loadMoreProducts();
    }
  }, [displayedProducts.length, loadMoreProducts]);

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">КОМПЬЮТЕРЫ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мощные игровые компьютеры с современными видеокартами и процессорами
          </p>
        </div>
        
        {/* Сетка товаров - 4 в ряду */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden"
              onClick={() => onProductClick?.(product)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    ХИТ
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-emerald-400 font-bold text-lg">
                      {product.price}
                    </span>
                    <span className="text-gray-400 text-xs line-through">
                      {parseInt(product.price.replace(/\D/g, '')) + 1000}₽
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0"
                  size="sm"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Индикатор загрузки */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
              <span className="text-gray-600">Загружаем больше товаров...</span>
            </div>
          </div>
        )}

        {/* Сообщение об окончании товаров */}
        {!hasMore && !isLoading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Вы просмотрели все доступные товары</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfiniteScrollCatalog;