import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { addToCart, removeFromCart, items } = useCart();
  
  const images = product.images || [product.image];
  
  const currentProductIndex = products.findIndex(p => p.id === product.id);
  const canNavigatePrev = products.length > 1 && currentProductIndex > 0;
  const canNavigateNext = products.length > 1 && currentProductIndex < products.length - 1;
  
  const isInCart = items.some(item => item.id === product.id && item.size === selectedSize);
  const cartItem = items.find(item => item.id === product.id && item.size === selectedSize);

  // Поддержка клавиатурной навигации
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevProduct();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNextProduct();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentProductIndex, products.length, isTransitioning]);
  
  const handlePrevProduct = () => {
    if (canNavigatePrev && onProductChange && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        onProductChange(products[currentProductIndex - 1]);
        setSelectedSize('');
        setSelectedImageIndex(0);
        setIsTransitioning(false);
      }, 150);
    }
  };
  
  const handleNextProduct = () => {
    if (canNavigateNext && onProductChange && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        onProductChange(products[currentProductIndex + 1]);
        setSelectedSize('');
        setSelectedImageIndex(0);
        setIsTransitioning(false);
      }, 150);
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto relative">
        {/* Боковые стрелочки навигации */}
        {products.length > 1 && (
          <>
            <button
              onClick={handlePrevProduct}
              disabled={!canNavigatePrev || isTransitioning}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-10 md:h-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                (!canNavigatePrev || isTransitioning) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
              }`}
            >
              <Icon name="ChevronLeft" size={24} className="text-gray-700" />
            </button>
            
            <button
              onClick={handleNextProduct}
              disabled={!canNavigateNext || isTransitioning}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-10 md:h-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                (!canNavigateNext || isTransitioning) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
              }`}
            >
              <Icon name="ChevronRight" size={24} className="text-gray-700" />
            </button>
          </>
        )}
        
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-montserrat text-2xl text-slate">
              {product.name}
            </DialogTitle>
            {products.length > 1 && (
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentProductIndex + 1} из {products.length}
              </div>
            )}
          </div>
        </DialogHeader>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-300 ${
          isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="transition-transform duration-300">
            <ProductImageGallery
              product={product}
              images={images}
              selectedImageIndex={selectedImageIndex}
              onImageIndexChange={setSelectedImageIndex}
            />
          </div>

          <div className="space-y-6 transition-transform duration-300">
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