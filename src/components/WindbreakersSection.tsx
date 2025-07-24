import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const WindbreakersSection = () => {
  const windbreakers = [
    {
      id: 1,
      name: "Ветровки Adidas",
      price: "2800₽",
      images: [
        "https://cdn.poehali.dev/files/2cbfbe63-5e4c-4a4d-bdec-95213e5e1302.jpeg",
        "https://cdn.poehali.dev/files/09df2b2a-69f1-4628-94fc-564572a1cafc.jpeg",
        "https://cdn.poehali.dev/files/bf47e22e-f9e9-4ef1-9e5b-4453fcc1bf2d.jpeg",
        "https://cdn.poehali.dev/files/6dab686c-9b11-41c4-968d-316c66994623.jpeg",
        "https://cdn.poehali.dev/files/820212d1-1876-4132-9ffb-d0a5a9387c68.jpeg"
      ],
      description: "Стильная спортивная ветровка Adidas с классическими полосками. Отличная защита от ветра и дождя.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Серый"],
      inStock: true
    }
  ];

  return (
    <section id="windbreakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Icon name="Wind" size={40} className="text-blue-500 mr-4" />
          <h2 className="font-montserrat text-4xl font-bold text-slate">
            Ветровки
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {windbreakers.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.images[0]} 
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.inStock && (
                  <div className="absolute top-4 left-4 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                    В наличии
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-slate mb-2">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-2xl text-blue-500">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {item.colors.join(", ")}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Размеры:</p>
                  <div className="flex gap-2">
                    {item.sizes.map((size) => (
                      <span 
                        key={size}
                        className="px-3 py-1 border border-gray-300 rounded text-sm hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-colors"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindbreakersSection;