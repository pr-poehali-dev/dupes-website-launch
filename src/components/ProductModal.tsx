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
  
  const images = product.images || [product.image];
  const currentImage = images[selectedImageIndex];
  
  const currentProductIndex = products.findIndex(p => p.id === product.id);
  const canNavigatePrev = products.length > 1 && currentProductIndex > 0;
  const canNavigateNext = products.length > 1 && currentProductIndex < products.length - 1;
  
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
                  : product.name.includes('Ветровка')
                  ? 'Классическая спортивная ветровка Adidas Originals с белыми полосками. Легкая и функциональная модель с фирменным логотипом trefoil. Отличная защита от ветра, идеальна для спорта и повседневной носки.'
                  : product.name.includes('Футболка')
                  ? 'Эксклюзивная футболка ERD (Enfants Riches Déprimés) с художественным принтом в китайском стиле. Высококачественный хлопок, оверсайз крой. Стильная модель для ценителей уличной моды и арт-дизайна.'
                  : product.name.includes('Essentials')
                  ? 'Лаконичный лонгслив из коллекции Essentials Fear Of God. Белая модель с минималистичным логотипом бренда. Высококачественный хлопок, комфортная посадка. Идеальный базовый элемент гардероба для ценителей премиальной уличной моды.'
                  : product.name.includes('Yeezy')
                  ? 'Эксклюзивный лонгслив Yeezy Bully с провокационным принтом. Белая модель с контрастным черно-белым изображением. Высококачественный хлопок, комфортная посадка. Идеальный выбор для любителей уличной моды и коллекционеров Yeezy.'
                  : product.name.includes('Gel Kahana 8')
                  ? 'Беговые кроссовки Asics Gel Kahana 8 в стильной бежевой расцветке. Универсальная модель с превосходной амортизацией и поддержкой для бега по различным поверхностям. Легкая конструкция и дышащие материалы обеспечивают комфорт на длинных дистанциях.'
                  : product.name.includes('Munchen')
                  ? 'Классические кроссовки Adidas Munchen в винтажном стиле. Легендарная модель из коллекции Spezial с замшевым верхом и контрастными тремя полосками. Идеально подходят для создания ретро-образов и повседневной носки.'
                  : product.name.includes('Crocs')
                  ? 'Классические черные Crocs - легендарная обувь для максимального комфорта. Изготовлены из запатентованного материала Croslite, который обеспечивает непревзойденную легкость и амортизацию. Идеальны для дома, дачи, пляжа и повседневной носки.'
                  : product.name.includes('Gel Rocket 10')
                  ? 'Профессиональные волейбольные кроссовки Asics Gel Rocket 10. Специально разработаны для игры в зале с превосходной амортизацией и поддержкой стопы. Легкие, дышащие и невероятно комфортные для интенсивных тренировок.'
                  : product.name.includes('Gel Preleus')
                  ? 'Стильные кроссовки Asics Gel Preleus с современным дизайном в светло-бежевой расцветке. Модель сочетает в себе комфорт технологии Gel и элегантный внешний вид. Идеальны для повседневной носки и создания модных образов.'
                  : product.name.includes('Handball Spezial черные')
                  ? 'Классические кроссовки Adidas Handball Spezial в элегантном черном цвете. Легендарная модель для гандбола с замшевым верхом и знаменитыми тремя полосками. Винтажный дизайн и высокое качество делают их идеальными для повседневной носки и создания стильных образов.'
                  : product.name.includes('Handball Spezial синие')
                  ? 'Классические кроссовки Adidas Handball Spezial в стильном синем цвете. Легендарная модель для гандбола с замшевым верхом и контрастными голубыми полосками. Винтажный дизайн и премиальные материалы для создания неповторимых образов.'
                  : product.name.includes('Handball Spezial серые')
                  ? 'Классические кроссовки Adidas Handball Spezial в элегантном сером цвете. Легендарная модель для гандбола с замшевым верхом и белыми тремя полосками. Винтажный дизайн в нейтральной расцветке подходит к любому стилю одежды.'
                  : product.name.includes('Gel Nyc')
                  ? 'Стильные кроссовки Asics Gel Nyc в серо-зеленой расцветке. Современная модель с технологией Gel и футуристичным дизайном. Идеальное сочетание комфорта и стиля для повседневной носки и активного образа жизни.'
                  : product.name.includes('Gel Kahana 8 черные')
                  ? 'Беговые кроссовки Asics Gel Kahana 8 в стильной черной расцветке. Универсальная модель с превосходной амортизацией и поддержкой для бега по различным поверхностям. Прочная конструкция и дышащие материалы для максимального комфорта.'
                  : product.name.includes('New Balance 530')
                  ? 'Стильные кроссовки New Balance 530 в классическом белом цвете. Ретро-дизайн с современными технологиями. Идеально подходят для повседневной носки и создания спортивных образов.'
                  : product.name.includes('Nike P-6000')
                  ? 'Современные кроссовки Nike P-6000 в черном цвете. Футуристичный дизайн с отличной амортизацией. Идеальны для активного образа жизни и городских приключений.'
                  : product.name.includes('Crocs белые')
                  ? 'Классические белые Crocs - легендарная обувь для максимального комфорта. Изготовлены из запатентованного материала Croslite. Идеальны для дома, дачи, пляжа и повседневной носки в стильном белом цвете.'
                  : product.name.includes('Asics')
                  ? 'Высокотехнологичные кроссовки Asics Gel-Kahana TR V2 для активного образа жизни. Современная модель с технологией Gel для максимального комфорта и амортизации. Прочная конструкция и стильный дизайн делают их идеальными для тренировок и повседневной носки.'
                  : product.name.includes('black')
                  ? 'Классические кроссовки Nike Air Force 1 в черном цвете. Легендарная модель баскетбольной обуви, ставшая иконой уличной моды. Премиальная кожа, удобная посадка и узнаваемый дизайн делают их идеальным выбором для повседневной носки.'
                  : 'Классические кроссовки Nike Air Force 1 в белом цвете. Легендарная модель баскетбольной обуви в иконичной белой расцветке. Премиальная кожа, комфортная посадка и вечный дизайн делают их must-have для любого гардероба.'
                }
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-montserrat font-semibold text-lg text-slate">
                Выберите размер
              </h3>
              {product.name.includes('Кроссовки') || product.name.includes('Crocs') || product.name.includes('Adidas') || product.name.includes('New Balance') || product.name.includes('Nike') ? (
                <div className="space-y-2">
                  {product.sizes.map((size, index) => (
                    <Button
                      key={size}
                      variant={selectedSize === product.sizeNumbers[index] ? "default" : "outline"}
                      className={`w-full justify-start text-sm h-auto py-2 ${selectedSize === product.sizeNumbers[index]
                        ? 'bg-violet hover:bg-violet/90 text-white'
                        : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedSize(product.sizeNumbers[index])}
                    >
                      • {size}
                    </Button>
                  ))}
                </div>
              ) : (
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
              )}
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
                      : product.name.includes('Ветровка')
                      ? '100% полиэстер'
                      : product.name.includes('Nike')
                      ? 'Натуральная кожа'
                      : product.name.includes('Gel Kahana 8')
                      ? 'Сетчатый материал, резиновая подошва'
                      : product.name.includes('Munchen')
                      ? 'Замша, резиновая подошва'
                      : product.name.includes('Crocs')
                      ? 'Croslite (запатентованная пена)'
                      : product.name.includes('Gel Rocket 10')
                      ? 'Синтетика, сетчатые вставки'
                      : product.name.includes('Gel Preleus')
                      ? 'Синтетика, текстиль, резиновая подошва'
                      : product.name.includes('Handball Spezial')
                      ? 'Замша, резиновая подошва'
                      : product.name.includes('Gel Nyc')
                      ? 'Сетчатый материал, замша, резиновая подошва'
                      : product.name.includes('Gel Kahana 8 черные')
                      ? 'Сетчатый материал, синтетика, резиновая подошва'
                      : product.name.includes('New Balance 530')
                      ? 'Сетчатый материал, синтетическая кожа'
                      : product.name.includes('Nike P-6000')
                      ? 'Текстиль, синтетика, резиновая подошва'
                      : product.name.includes('Crocs белые')
                      ? 'Croslite (запатентованная пена)'
                      : product.name.includes('Asics')
                      ? 'Синтетика, текстиль'
                      : '100% хлопок'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Цвет:</span>
                  <span>
                    {product.name.includes('black')
                      ? 'Черный'
                      : product.name.includes('white')
                      ? 'Белый'
                      : product.name.includes('Gel Kahana 8')
                      ? 'Бежевый'
                      : product.name.includes('Munchen')
                      ? 'Бордовый/Черный'
                      : product.name.includes('Crocs')
                      ? 'Черный'
                      : product.name.includes('Gel Rocket 10')
                      ? 'Черный/Белый'
                      : product.name.includes('Gel Preleus')
                      ? 'Светло-бежевый'
                      : product.name.includes('Handball Spezial')
                      ? 'Черный'
                      : product.name.includes('Gel Nyc')
                      ? 'Серо-зеленый'
                      : product.name.includes('Handball Spezial синие')
                      ? 'Синий'
                      : product.name.includes('Handball Spezial серые')
                      ? 'Серый'
                      : product.name.includes('Gel Kahana 8 черные')
                      ? 'Черный'
                      : product.name.includes('New Balance 530')
                      ? 'Белый'
                      : product.name.includes('Nike P-6000')
                      ? 'Черный'
                      : product.name.includes('Crocs белые')
                      ? 'Белый'  
                      : product.name.includes('Asics')
                      ? 'Серый/Белый'
                      : product.name.includes('Essentials') 
                      ? 'Белый' 
                      : product.name.includes('Футболка') 
                      ? 'Черный' 
                      : product.name.includes('Ветровка')
                      ? 'Серый'
                      : 'Серый'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Коллекция:' 
                      : 'Бренд:'
                    }
                  </span>
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Гоша Рубчинский х Kanye West' 
                      : product.name.includes('Ветровка')
                      ? 'Adidas Originals'
                      : product.name.includes('Essentials')
                      ? 'Fear Of God Essentials'
                      : product.name.includes('Yeezy')
                      ? 'Yeezy'
                      : product.name.includes('Nike')
                      ? 'Nike'
                      : product.name.includes('New Balance')
                      ? 'New Balance'
                      : product.name.includes('Munchen') || product.name.includes('Handball Spezial')
                      ? 'Adidas'
                      : product.name.includes('Crocs')
                      ? 'Crocs'
                      : product.name.includes('Asics')
                      ? 'Asics'
                      : 'ERD (Enfants Riches Déprimés)'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Принт:' 
                      : product.name.includes('Ветровка')
                      ? 'Особенности:'
                      : product.name.includes('Кроссовки') || product.name.includes('Adidas')
                      ? 'Технология:'
                      : 'Принт:'
                    }
                  </span>
                  <span>
                    {product.name.includes('Худи') 
                      ? 'Черные псы' 
                      : product.name.includes('Ветровка')
                      ? 'Белые полоски, логотип trefoil'
                      : product.name.includes('Essentials')
                      ? 'Минималистичный логотип'
                      : product.name.includes('Yeezy')
                      ? 'Bully graphic art'
                      : product.name.includes('Nike')
                      ? 'Air амортизация'
                      : product.name.includes('Gel Kahana 8')
                      ? 'Gel амортизация, дышащая сетка'
                      : product.name.includes('Munchen')
                      ? 'Винтажный дизайн, три полоски'
                      : product.name.includes('Handball Spezial')
                      ? 'Винтажный дизайн, замшевый верх'
                      : product.name.includes('Crocs')
                      ? 'Легкость, водостойкость'
                      : product.name.includes('Gel Rocket 10')
                      ? 'Gel амортизация, поддержка стопы'
                      : product.name.includes('Gel Preleus')
                      ? 'Gel амортизация, современный дизайн'
                      : product.name.includes('Gel Nyc')
                      ? 'Gel амортизация, футуристичный дизайн'
                      : product.name.includes('Gel Kahana 8 черные')
                      ? 'Gel амортизация, дышащая сетка'
                      : product.name.includes('New Balance 530')
                      ? 'ABZORB амортизация, ретро-дизайн'
                      : product.name.includes('Nike P-6000')
                      ? 'Air амортизация, современный дизайн'
                      : product.name.includes('Crocs белые')
                      ? 'Легкость, водостойкость'
                      : product.name.includes('Asics')
                      ? 'Gel амортизация'
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