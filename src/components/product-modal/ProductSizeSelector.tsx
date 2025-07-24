import { Button } from "@/components/ui/button";

interface ProductSizeSelectorProps {
  product: {
    name: string;
    sizes: string[];
    sizeNumbers: string[];
  };
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

const ProductSizeSelector = ({ product, selectedSize, onSizeSelect }: ProductSizeSelectorProps) => {
  const isShoesProduct = product.name.includes('Кроссовки') || 
                         product.name.includes('Crocs') || 
                         product.name.includes('Adidas') || 
                         product.name.includes('New Balance') || 
                         product.name.includes('Nike');

  return (
    <div className="space-y-3">
      <h3 className="font-montserrat font-semibold text-lg text-slate">
        Выберите размер
      </h3>
      {isShoesProduct ? (
        <div className="space-y-2">
          {product.sizes.map((size, index) => (
            <Button
              key={size}
              variant={selectedSize === product.sizeNumbers[index] ? "default" : "outline"}
              className={`w-full justify-start text-sm h-auto py-2 ${selectedSize === product.sizeNumbers[index]
                ? 'bg-violet hover:bg-violet/90 text-white'
                : 'hover:bg-gray-50'
              }`}
              onClick={() => onSizeSelect(product.sizeNumbers[index])}
            >
              • {size}
            </Button>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {product.sizes.map((size, index) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              className={`w-full justify-between text-sm h-auto py-3 ${selectedSize === size 
                ? 'bg-violet hover:bg-violet/90 text-white' 
                : 'hover:border-violet hover:text-violet'
              }`}
              onClick={() => onSizeSelect(size)}
            >
              <span className="font-bold">{size}</span>
              <span className="text-xs opacity-70">({product.sizeNumbers[index]})</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSizeSelector;