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
    images?: string[];
    isNew?: boolean;
    discount?: number;
  };
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
  const images = product.images || [product.image];
  const currentImage = images[selectedImageIndex];

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
                    onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)}
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)}
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
                    onClick={() => setSelectedImageIndex(index)}
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

            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Описание товара
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.name.includes('Худи') 
                  ? 'Стильное худи в коллаборации Гоши Рубчинского и Kanye West с принтом "Черные псы". Выполнено из качественного хлопка с добавлением полиэстера. Удобная посадка и современный дизайн делают это худи идеальным выбором для повседневной носки.'
                  : product.name.includes('Ветровки')
                  ? 'Классическая спортивная ветровка Adidas с белыми полосками. Легкая и функциональная модель с фирменным логотипом trefoil. Отличная защита от ветра, идеальна для спорта и повседневной носки.'
                  : 'Эксклюзивная футболка ERD (Enfants Riches Déprimés) с художественным принтом в китайском стиле. Высококачественный хлопок, оверсайз крой. Стильная модель для ценителей уличной моды и арт-дизайна.'
                }
              </p>
            </div>

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

            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Характеристики
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Материал:</span>
                  <span>
                    {product.name.includes('Худи') 
                      ? '80% хлопок, 20% полиэстер' 
                      : product.name.includes('Ветровки')
                      ? '100% полиэстер'
                      : '100% хлопок'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Цвет:</span>
                  <span>{product.name.includes('Футболка') ? 'Черный' : 'Серый'}</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Коллекция:' 
                      : product.name.includes('Ветровки')
                      ? 'Бренд:'
                      : 'Бренд:'
                    }
                  </span>
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Гоша Рубчинский х Kanye West' 
                      : product.name.includes('Ветровки')
                      ? 'Adidas Originals'
                      : 'ERD (Enfants Riches Déprimés)'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Принт:' 
                      : product.name.includes('Ветровки')
                      ? 'Особенности:'
                      : 'Принт:'
                    }
                  </span>
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Черные псы' 
                      : product.name.includes('Ветровки')
                      ? 'Белые полоски, логотип trefoil'
                      : 'Chinese art design'
                    }
                  </span>
                </div>
              </div>
            </div>

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


          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;