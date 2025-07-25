import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
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
  const { addToCart, removeFromCart, items } = useCart();
  
  const images = product.images || [product.image];
  
  const currentProductIndex = products.findIndex(p => p.id === product.id);
  const canNavigatePrev = products.length > 1 && currentProductIndex > 0;
  const canNavigateNext = products.length > 1 && currentProductIndex < products.length - 1;
  
  const isInCart = items.some(item => item.id === product.id && item.size === selectedSize);
  const cartItem = items.find(item => item.id === product.id && item.size === selectedSize);
  
  const handlePrevProduct = () => {
    if (canNavigatePrev && onProductChange) {
      onProductChange(products[currentProductIndex - 1]);
      setSelectedSize('');
      setSelectedImageIndex(0);
    }
  };
  
  const handleNextProduct = () => {
    if (canNavigateNext && onProductChange) {
      onProductChange(products[currentProductIndex + 1]);
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
                  {currentProductIndex + 1} из {products.length}
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