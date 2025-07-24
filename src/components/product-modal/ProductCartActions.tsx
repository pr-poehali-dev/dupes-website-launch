import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { CartItem } from '@/contexts/CartContext';

interface ProductCartActionsProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  selectedSize: string;
  quantity: number;
  isInCart: boolean;
  cartItem?: CartItem;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

const ProductCartActions = ({
  selectedSize,
  quantity,
  isInCart,
  cartItem,
  onQuantityChange,
  onAddToCart,
  onRemoveFromCart
}: ProductCartActionsProps) => {
  return (
    <div className="space-y-4">
      {!isInCart && (
        <div className="flex items-center justify-between">
          <span className="font-montserrat font-semibold text-slate">Количество:</span>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="h-8 w-8"
            >
              <Icon name="Minus" size={16} />
            </Button>
            <span className="font-montserrat font-semibold text-lg w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onQuantityChange(quantity + 1)}
              className="h-8 w-8"
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
        </div>
      )}
      
      {isInCart ? (
        <div className="space-y-3">
          <div className="bg-emerald/10 border border-emerald/20 rounded-lg p-3 text-center">
            <p className="text-sm text-emerald font-medium">
              Товар добавлен в корзину ({cartItem?.quantity} шт.)
            </p>
          </div>
          <Button 
            onClick={onRemoveFromCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-montserrat font-semibold py-3"
            size="lg"
            disabled={!selectedSize}
          >
            <Icon name="Trash2" size={20} className="mr-2" />
            Удалить из корзины
          </Button>
        </div>
      ) : (
        <Button 
          onClick={onAddToCart}
          className="w-full bg-violet hover:bg-violet/90 text-white font-montserrat font-semibold py-3"
          size="lg"
          disabled={!selectedSize}
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Добавить в корзину
        </Button>
      )}
    </div>
  );
};

export default ProductCartActions;