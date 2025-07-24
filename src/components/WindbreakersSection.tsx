import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const WindbreakersSection = () => {
  const windbreakers = [
    {
      id: 1,
      name: "Ветровка Adidas Original",
      price: "2 800₽",
      image: "https://cdn.poehali.dev/files/3c3b212e-2890-41fe-8a40-1de3d1a3ab08.jpeg",
      description: "Классическая спортивная ветровка с тремя полосками"
    },
    {
      id: 2,
      name: "Ветровка Adidas Back Print",
      price: "2 800₽",
      image: "https://cdn.poehali.dev/files/960a411f-736a-4098-a04c-4f2cfea7d1ad.jpeg",
      description: "Стильная ветровка с принтом на спине"
    },
    {
      id: 3,
      name: "Ветровка Adidas Classic",
      price: "2 800₽",
      image: "https://cdn.poehali.dev/files/bab52ca7-1aa0-4a4e-9bdf-76f06fee7e93.jpeg",
      description: "Универсальная ветровка для активного образа жизни"
    },
    {
      id: 4,
      name: "Ветровка Adidas Striped",
      price: "2 800₽",
      image: "https://cdn.poehali.dev/files/21404181-c0e8-4659-88d4-2c6f59bf3a7e.jpeg",
      description: "Ветровка с контрастными полосками"
    },
    {
      id: 5,
      name: "Ветровка Adidas Vintage",
      price: "2 800₽",
      image: "https://cdn.poehali.dev/files/24675e71-e090-45e7-9041-600f4f9c854e.jpeg",
      description: "Винтажная модель с оригинальными деталями"
    }
  ];

  return (
    <section id="windbreakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold text-slate mb-4">
            Ветровки Adidas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Коллекция легких и стильных ветровок для любой погоды
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {windbreakers.map((windbreaker) => (
            <Card 
              key={windbreaker.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-blue-50/50 to-white border-blue-100"
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={windbreaker.image}
                  alt={windbreaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-montserrat font-bold text-lg text-slate mb-2 group-hover:text-blue-600 transition-colors">
                  {windbreaker.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {windbreaker.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-xl text-blue-600">
                    {windbreaker.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Добавить в корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
          >
            <Icon name="Plus" size={16} className="mr-2" />
            Показать больше ветровок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WindbreakersSection;