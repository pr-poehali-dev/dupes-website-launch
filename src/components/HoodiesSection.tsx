import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import ProductModal from './ProductModal';

const HoodiesSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const hoodies = [
    {
      id: 1,
      name: "Худи Гоша Рубчинский х Kanye West Черные псы",
      price: "3100₽",
      sizes: ["S", "M", "L", "XL", "XXL"],
      sizeNumbers: ["1", "2", "3", "4", "5"],
      image: "https://cdn.poehali.dev/files/9a34a520-3660-42c3-ba55-bcd4dfc369f5.jpeg",
      isNew: true,
      discount: null
    }
  ];

  const openProductModal = (hoodie) => {
    setSelectedProduct(hoodie);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="hoodies" className="py-16 bg-gradient-to-br from-violet/5 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Shirt" size={40} className="text-violet mr-3" />
              <h2 className="font-montserrat text-4xl font-bold text-slate">
                Худи
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Коллекция стильных и качественных худи по доступным ценам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {hoodies.map((hoodie) => (
              <Card 
                key={hoodie.id} 
                className="overflow-hidden bg-white hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => openProductModal(hoodie)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={hoodie.image} 
                    alt={hoodie.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {hoodie.isNew && (
                    <Badge className="absolute top-3 left-3 bg-emerald text-white">
                      NEW
                    </Badge>
                  )}
                  {hoodie.discount && (
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                      -{hoodie.discount}%
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-lg text-slate mb-3">
                    {hoodie.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-montserrat text-2xl font-bold text-violet">
                      {hoodie.price}
                    </span>
                    <div className="flex gap-1">
                      {hoodie.sizes.slice(0, 3).map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                      {hoodie.sizes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{hoodie.sizes.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-violet hover:bg-violet/90 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductModal(hoodie);
                    }}
                  >
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-violet hover:bg-violet/90 text-white font-montserrat font-semibold px-8 py-4"
            >
              <a href="tel:+79029903444">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться для заказа
              </a>
            </Button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal} 
        />
      )}
    </>
  );
};

export default HoodiesSection;