import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  price: string;
  sizes: string[];
  sizeNumbers: string[];
  image: string;
  images?: string[];
  isNew?: boolean;
  discount?: number | null;
}

interface CategoryPageProps {
  title: string;
  products: Product[];
  onBack: () => void;
}

const CategoryPage = ({ title, products, onBack }: CategoryPageProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_PAGE = 8; // 2 ряда по 4 товара
  const observerTarget = useRef<HTMLDivElement>(null);

  // Функция для извлечения цены из строки
  const extractPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^\d]/g, ''));
  };

  // Уникальные цены для фильтра
  const uniquePrices = useMemo(() => {
    const prices = products.map(p => extractPrice(p.price));
    return [...new Set(prices)].sort((a, b) => a - b);
  }, [products]);

  // Фильтрация товаров по цене
  const filteredProducts = useMemo(() => {
    if (!priceFilter) return products;
    
    const filterPrice = parseInt(priceFilter);
    return products.filter(p => extractPrice(p.price) >= filterPrice);
  }, [products, priceFilter]);

  // Функция загрузки следующей порции товаров
  const loadMoreProducts = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const currentLength = displayedProducts.length;
      const nextItems = filteredProducts.slice(currentLength, currentLength + ITEMS_PER_PAGE);
      
      setDisplayedProducts(prev => [...prev, ...nextItems]);
      setIsLoading(false);
    }, 500); // Имитация загрузки
  }, [displayedProducts.length, filteredProducts, isLoading]);

  // Intersection Observer для инфинит-скролла
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProducts.length < filteredProducts.length) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMoreProducts, displayedProducts.length, filteredProducts.length]);

  // Сброс отображаемых товаров при изменении фильтра
  useEffect(() => {
    const initialItems = filteredProducts.slice(0, ITEMS_PER_PAGE);
    setDisplayedProducts(initialItems);
  }, [filteredProducts]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Заголовок с кнопкой назад */}
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              onClick={onBack}
              className="mr-4 flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к каталогу
            </Button>
            <h1 className="font-montserrat text-3xl font-bold text-slate">
              {title}
            </h1>
          </div>

          {/* Фильтр по цене */}
          {uniquePrices.length > 1 && (
            <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-slate mb-4 flex items-center gap-2">
                <Icon name="Filter" size={16} />
                Фильтр по цене
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={priceFilter === '' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPriceFilter('')}
                  className="bg-slate-dark text-white hover:bg-slate-dark/90"
                >
                  Все товары
                </Button>
                {uniquePrices.map(price => (
                  <Button
                    key={price}
                    variant={priceFilter === price.toString() ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setPriceFilter(price.toString())}
                    className={priceFilter === price.toString() 
                      ? "bg-slate-dark text-white hover:bg-slate-dark/90" 
                      : "hover:bg-slate-dark/10"
                    }
                  >
                    от {price}₽
                  </Button>
                ))}
              </div>
              {priceFilter && (
                <p className="text-sm text-gray-500 mt-3">
                  Показано {displayedProducts.length} из {filteredProducts.length} товаров
                </p>
              )}
            </div>
          )}

          {/* Сетка товаров - всегда 4 колонки */}
          <div className="grid grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <Card 
                key={product.id}
                className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                onClick={() => openProductModal(product)}
              >
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-emerald text-white">
                      Новинка
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-montserrat font-semibold text-slate mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-slate">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Icon name="Package" size={14} />
                      {product.sizes.length} размер{product.sizes.length > 1 ? 'ов' : ''}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Индикатор загрузки */}
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-dark"></div>
              <span className="ml-3 text-slate">Загружаем товары...</span>
            </div>
          )}

          {/* Скрытый элемент для Intersection Observer */}
          <div ref={observerTarget} className="h-4" />

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="font-montserrat text-xl text-gray-600 mb-2">
                Товары не найдены
              </h3>
              <p className="text-gray-500">
                Попробуйте изменить фильтр или посмотрите все товары
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          products={displayedProducts}
          onClose={closeProductModal}
          onProductChange={setSelectedProduct}
        />
      )}
    </>
  );
};

export default CategoryPage;