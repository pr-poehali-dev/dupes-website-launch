import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface ProductImageGalleryProps {
  product: {
    name: string;
    isNew?: boolean;
    discount?: number;
  };
  images: string[];
  selectedImageIndex: number;
  onImageIndexChange: (index: number) => void;
}

const ProductImageGallery = ({ 
  product, 
  images, 
  selectedImageIndex, 
  onImageIndexChange 
}: ProductImageGalleryProps) => {
  const currentImage = images[selectedImageIndex];

  return (
    <div className="space-y-4">
      <div className="relative">
        <img 
          src={currentImage} 
          alt={product.name}
          className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
        />
        {product.isNew && (
          <Badge className="absolute top-4 left-4 bg-emerald text-white">
            NEW
          </Badge>
        )}
        {product.discount && (
          <Badge className="absolute top-4 right-4 bg-red-500 text-white">
            -{product.discount}%
          </Badge>
        )}
        
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => onImageIndexChange(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => onImageIndexChange(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIndex === index 
                  ? 'border-violet shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onImageIndexChange(index)}
            >
              <img 
                src={image} 
                alt={`${product.name} фото ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;