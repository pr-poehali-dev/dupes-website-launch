import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import ProductModal from './ProductModal';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const hoodieProduct = {
    id: 1,
    name: "Худи Гоша Рубчинский х Kanye West Черные псы",
    price: "3100₽",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeNumbers: ["1", "2", "3", "4", "5"],
    image: "https://cdn.poehali.dev/files/0172d86e-1da4-4342-b907-62729b281c29.jpeg",
    isNew: true,
    discount: null
  };

  const windbreakerProduct = {
    id: 2,
    name: "Ветровки Adidas",
    price: "2800₽",
    sizes: ["S", "M", "L", "XL"],
    sizeNumbers: ["1", "2", "3", "4"],
    image: "https://cdn.poehali.dev/files/3255da10-b129-4257-931c-aeeed12f399e.jpeg",
    isNew: false,
    discount: null
  };

  const tshirtProduct = {
    id: 3,
    name: "Футболка ERD Chinese enfants riches deprimes",
    price: "2200₽",
    sizes: ["S", "M", "L", "XL"],
    sizeNumbers: ["1", "2", "3", "4"],
    image: "https://cdn.poehali.dev/files/4f43107a-2067-42ff-8c69-1d4971646dca.jpeg",
    isNew: false,
    discount: null
  };

  const longsleeveProducts = [
    {
      id: 4,
      name: "Лонгслив Essentials Fear Of God",
      price: "2900₽",
      sizes: ["M", "L"],
      sizeNumbers: ["2", "3"],
      image: "https://cdn.poehali.dev/files/ae753281-4873-45e2-95bc-0da68de6851b.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 5,
      name: "Yeezy Bully longsleeve",
      price: "2900₽",
      sizes: ["S", "M", "L"],
      sizeNumbers: ["1", "2", "3"],
      image: "https://cdn.poehali.dev/files/f40ea812-995a-46d2-887b-acd99d98cffc.jpeg",
      isNew: false,
      discount: null
    }
  ];

  const sneakersProducts = [
    {
      id: 1,
      name: "Кроссовки Asics Gel-Kahana TR V2",
      price: "2900₽",
      sizes: ["37 EU — 21,5 см", "38 EU — 22,5 см", "39 EU — 23,5 см", "40 EU — 24,5 см", "41 EU — 25,5 см"],
      sizeNumbers: ["37", "38", "39", "40", "41"],
      image: "https://cdn.poehali.dev/files/90caf808-95e1-4c25-96a2-6c4a8fdfb9e3.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 2,
      name: "Кроссовки Nike Air Force 1 black",
      price: "3000₽",
      sizes: ["41 EU — 25 см", "42 EU — 26 см", "43 EU — 27 см", "44 EU — 28 см", "45 EU — 29 см"],
      sizeNumbers: ["41", "42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/30e463c4-ba93-4d7b-a069-6d4b0a3a62c9.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 3,
      name: "Кроссовки Nike Air Force 1 white",
      price: "3000₽",
      sizes: ["42 EU — 25,5 см", "43 EU — 26,5 см", "44 EU — 27,5 см", "45 EU — 28,5 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/16edc6df-303e-4979-aabe-32125fb477a8.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 4,
      name: "Кроссовки Asics Gel Rocket 10",
      price: "3500₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см", "45 EU — 29,5 см"],
      sizeNumbers: ["41", "42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/c2aa9f86-b695-4ef8-a41f-eed40b602650.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 5,
      name: "Crocs черные",
      price: "2000₽",
      sizes: ["41 EU — 24 см", "42 EU — 25 см", "43 EU — 26 см", "44 EU — 27 см"],
      sizeNumbers: ["41", "42", "43", "44"],
      image: "https://cdn.poehali.dev/files/580aeec3-d1fd-43a3-9ffa-d801106f8a9c.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 6,
      name: "Кроссовки Adidas Munchen",
      price: "3000₽",
      sizes: ["42 EU — 25,5 см", "43 EU — 26,5 см", "44 EU — 27,5 см", "45 EU — 28,5 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/ccb75f3b-c1e1-4f9a-9cff-9e31adf4f69e.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 7,
      name: "Кроссовки Asics Gel Kahana 8 бежевые",
      price: "3500₽",
      sizes: ["42 EU — 25,5 см", "43 EU — 26,5 см", "44 EU — 27,5 см", "45 EU — 28,5 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/b97d1f90-959d-4730-b5b5-585c1309b646.jpeg",
      isNew: false,
      discount: null
    }
  ];
  
  const openHoodieModal = () => {
    setSelectedProduct(hoodieProduct);
  };

  const openWindbreakerModal = () => {
    setSelectedProduct(windbreakerProduct);
  };

  const openTshirtModal = () => {
    setSelectedProduct(tshirtProduct);
  };

  const openLongsleeveModal = () => {
    setSelectedProduct(longsleeveProducts[0]);
  };

  const openSneakersModal = () => {
    setSelectedProduct(sneakersProducts[0]);
  };
  
  const closeProductModal = () => {
    setSelectedProduct(null);
  };
  const categories = [
    {
      id: 'hoodies',
      name: 'Худи',
      icon: 'Shirt',
      description: 'Теплые и стильные худи',
      bgClass: 'bg-gradient-to-br from-violet/10 to-violet/5',
      borderClass: 'border-violet/20',
      iconClass: 'text-violet',
      buttonClass: 'border-violet text-violet hover:bg-violet'
    },
    {
      id: 'windbreakers',
      name: 'Ветровки',
      icon: 'Wind',
      description: 'Легкие ветровки для любой погоды',
      bgClass: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
      borderClass: 'border-blue-500/20',
      iconClass: 'text-blue-500',
      buttonClass: 'border-blue-500 text-blue-500 hover:bg-blue-500'
    },
    {
      id: 'tshirts',
      name: 'Футболки',
      icon: 'Shirt',
      description: 'Удобные футболки на каждый день',
      bgClass: 'bg-gradient-to-br from-emerald/10 to-emerald/5',
      borderClass: 'border-emerald/20',
      iconClass: 'text-emerald',
      buttonClass: 'border-emerald text-emerald hover:bg-emerald'
    },
    {
      id: 'longsleeves',
      name: 'Лонгсливы',
      icon: 'Shirt',
      description: 'Стильные лонгсливы',
      bgClass: 'bg-gradient-to-br from-orange/10 to-orange/5',
      borderClass: 'border-orange/20',
      iconClass: 'text-orange',
      buttonClass: 'border-orange text-orange hover:bg-orange'
    },
    {
      id: 'sneakers',
      name: 'Кроссовки',
      icon: 'Footprints',
      description: 'Комфортная обувь для спорта и отдыха',
      bgClass: 'bg-gradient-to-br from-red-500/10 to-red-500/5',
      borderClass: 'border-red-500/20',
      iconClass: 'text-red-500',
      buttonClass: 'border-red-500 text-red-500 hover:bg-red-500'
    },
    {
      id: 'caps',
      name: 'Кепки',
      icon: 'HardHat',
      description: 'Модные кепки и бейсболки',
      bgClass: 'bg-gradient-to-br from-indigo-500/10 to-indigo-500/5',
      borderClass: 'border-indigo-500/20',
      iconClass: 'text-indigo-500',
      buttonClass: 'border-indigo-500 text-indigo-500 hover:bg-indigo-500'
    }
  ];

  return (
    <>
    <section className="py-16 bg-gray-50" data-section="catalog">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-4xl font-bold text-center text-slate mb-12">
          Каталог товаров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`p-6 ${category.bgClass} ${category.borderClass} hover:shadow-xl transition-all cursor-pointer group`}
            >
              <div className="flex items-center mb-4">
                <Icon 
                  name={category.icon} 
                  size={40} 
                  className={`${category.iconClass} mr-3 group-hover:scale-110 transition-transform`} 
                />
                <h3 className="font-montserrat font-bold text-xl text-slate">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Button 
                variant="outline" 
                className={`w-full ${category.buttonClass} hover:text-white`}
                onClick={() => {
                  if (category.id === 'hoodies') {
                    openHoodieModal();
                  } else if (category.id === 'windbreakers') {
                    openWindbreakerModal();
                  } else if (category.id === 'tshirts') {
                    openTshirtModal();
                  } else if (category.id === 'longsleeves') {
                    openLongsleeveModal();
                  } else if (category.id === 'sneakers') {
                    openSneakersModal();
                  } else {
                    const catalogSection = document.getElementById(category.id);
                    if (catalogSection) {
                      catalogSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                Перейти в раздел
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
    
    {selectedProduct && (
      <ProductModal 
        product={selectedProduct} 
        onClose={closeProductModal}
        products={
          selectedProduct.name.includes('longsleeve') || selectedProduct.name.includes('Essentials') 
            ? longsleeveProducts 
            : selectedProduct.name.includes('Кроссовки') || selectedProduct.name.includes('Crocs')
            ? sneakersProducts
            : [selectedProduct]
        }
        onProductChange={setSelectedProduct}
      />
    )}
    </>
  );
};

export default Catalog;