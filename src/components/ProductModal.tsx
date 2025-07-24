import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: string;
    sizes: string[];
    sizeNumbers: string[];
    image: string;
    isNew?: boolean;
    discount?: number;
  };
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleOrder = () => {
    const message = selectedSize 
      ? `Хочу заказать ${product.name}, размер ${selectedSize}, цена ${product.price}`
      : `Хочу заказать ${product.name}, цена ${product.price}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79029903444?text=${encodedMessage}`, '_blank');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-2xl text-slate">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Изображение товара */}
          <div className="relative">
            <img 
              src={product.image} 
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
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            {/* Цена */}
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

            {/* Описание */}
            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Описание товара
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Стильное худи в коллаборации Гоши Рубчинского и Kanye West с принтом "Черные псы". 
                Выполнено из качественного хлопка с добавлением полиэстера. 
                Удобная посадка и современный дизайн делают это худи идеальным выбором для повседневной носки.
              </p>
            </div>

            {/* Размеры */}
            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Выберите размер
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size, index) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`${selectedSize === size 
                      ? 'bg-violet hover:bg-violet/90 text-white' 
                      : 'hover:border-violet hover:text-violet'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <div className="text-center">
                      <div className="font-bold">{size}</div>
                      <div className="text-xs opacity-70">({product.sizeNumbers[index]})</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Характеристики */}
            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Характеристики
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Материал:</span>
                  <span>80% хлопок, 20% полиэстер</span>
                </div>
                <div className="flex justify-between">
                  <span>Цвет:</span>
                  <span>Серый</span>
                </div>
                <div className="flex justify-between">
                  <span>Коллекция:</span>
                  <span>Гоша Рубчинский х Kanye West</span>
                </div>
                <div className="flex justify-between">
                  <span>Принт:</span>
                  <span>Черные псы</span>
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="space-y-3">
              <Button 
                onClick={handleOrder}
                className="w-full bg-violet hover:bg-violet/90 text-white font-montserrat font-semibold py-3"
                size="lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать в WhatsApp
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="w-full border-violet text-violet hover:bg-violet hover:text-white font-montserrat font-semibold py-3"
                size="lg"
              >
                <a href="tel:+79029903444">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Icon name="Info" size={18} className="text-violet mr-2" />
                <span className="font-montserrat font-semibold text-slate">
                  Информация о доставке
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Доставка по России от 300₽. При заказе от 5000₽ — бесплатная доставка.
                Оплата при получении или переводом на карту.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;