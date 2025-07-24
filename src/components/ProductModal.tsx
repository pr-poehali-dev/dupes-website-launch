import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState, useMemo } from 'react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import ProductImageGallery from './product-modal/ProductImageGallery';
import ProductDescription from './product-modal/ProductDescription';
import ProductSizeSelector from './product-modal/ProductSizeSelector';
import ProductSpecifications from './product-modal/ProductSpecifications';
import ProductCartActions from './product-modal/ProductCartActions';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: string;
    sizes: string[];
    sizeNumbers: string[];
    image: string;
    images?: string[];
    isNew?: boolean;
    discount?: number;
  };
  onClose: () => void;
  products?: {
    id: number;
    name: string;
    price: string;
    sizes: string[];
    sizeNumbers: string[];
    image: string;
    images?: string[];
    isNew?: boolean;
    discount?: number;
  }[];
  onProductChange?: (product: any) => void;
}

const ProductModal = ({ product, onClose, products = [], onProductChange }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [priceFilter, setPriceFilter] = useState<string>('');
  const { addToCart, removeFromCart, items } = useCart();
  
  const images = product.images || [product.image];

  // Функция для извлечения цены из строки
  const extractPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^\d]/g, ''));
  };

  // Фильтрация товаров по цене
  const filteredProducts = useMemo(() => {
    if (!priceFilter || products.length === 0) return products;
    
    const filterPrice = parseInt(priceFilter);
    return products.filter(p => extractPrice(p.price) >= filterPrice);
  }, [products, priceFilter]);

  // Уникальные цены для фильтра
  const uniquePrices = useMemo(() => {
    if (products.length === 0) return [];
    const prices = products.map(p => extractPrice(p.price));
    return [...new Set(prices)].sort((a, b) => a - b);
  }, [products]);
  
  const currentProductIndex = filteredProducts.findIndex(p => p.id === product.id);
  const canNavigatePrev = filteredProducts.length > 1 && currentProductIndex > 0;
  const canNavigateNext = filteredProducts.length > 1 && currentProductIndex < filteredProducts.length - 1;
  
  const isInCart = items.some(item => item.id === product.id && item.size === selectedSize);
  const cartItem = items.find(item => item.id === product.id && item.size === selectedSize);
  
  const handlePrevProduct = () => {
    if (canNavigatePrev && onProductChange) {
      onProductChange(filteredProducts[currentProductIndex - 1]);
      setSelectedSize('');
      setSelectedImageIndex(0);
    }
  };
  
  const handleNextProduct = () => {
    if (canNavigateNext && onProductChange) {
      onProductChange(filteredProducts[currentProductIndex + 1]);
      setSelectedSize('');
      setSelectedImageIndex(0);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Пожалуйста, выберите размер');
      return;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    }, quantity);
    
    onClose();
  };
  
  const handleRemoveFromCart = () => {
    if (!selectedSize) return;
    removeFromCart(product.id, selectedSize);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-montserrat text-2xl text-slate">
              {product.name}
            </DialogTitle>
            {products.length > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevProduct}
                  disabled={!canNavigatePrev}
                  className="p-2"
                >
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <span className="text-sm text-gray-500">
                  {currentProductIndex + 1} из {filteredProducts.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextProduct}
                  disabled={!canNavigateNext}
                  className="p-2"
                >
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            )}
          </div>
        </DialogHeader>
        
        {/* Фильтр по цене */}
        {products.length > 1 && uniquePrices.length > 1 && (
          <div className="mb-6">
            <h4 className="font-medium text-slate mb-3 flex items-center gap-2">
              <Icon name="Filter" size={16} />
              Фильтр по цене
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={priceFilter === '' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPriceFilter('')}
                className="text-xs"
              >
                Все товары
              </Button>
              {uniquePrices.map(price => (
                <Button
                  key={price}
                  variant={priceFilter === price.toString() ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPriceFilter(price.toString())}
                  className="text-xs"
                >
                  от {price}₽
                </Button>
              ))}
            </div>
            {priceFilter && (
              <p className="text-sm text-gray-500 mt-2">
                Показано {filteredProducts.length} из {products.length} товаров
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductImageGallery
            product={product}
            images={images}
            selectedImageIndex={selectedImageIndex}
            onImageIndexChange={setSelectedImageIndex}
          />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-montserrat text-4xl font-bold text-violet">
                {product.price}
              </span>
              {product.isNew && (
                <Badge className="bg-emerald text-white">
                  Новинка
                </Badge>
              )}
            </div>

            <ProductDescription product={product} />

            <ProductSizeSelector
              product={product}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />

            <ProductSpecifications product={product} />

            <ProductCartActions
              product={product}
              selectedSize={selectedSize}
              quantity={quantity}
              isInCart={isInCart}
              cartItem={cartItem}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;