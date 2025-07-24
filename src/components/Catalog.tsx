import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import ProductModal from './ProductModal';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const capProduct = {
    id: 100,
    name: "Кепка Diesel",
    price: "1700₽",
    sizes: ["One Size — 56-60 см"],
    sizeNumbers: ["One Size"],
    image: "https://cdn.poehali.dev/files/90b65f07-773b-48d6-84b5-e150790febc2.jpeg",
    isNew: true,
    discount: null
  };

  const hoodieProduct = {
    id: 1,
    name: "Худи Гоша Рубчинский х Kanye West Черные псы",
    price: "3100₽",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeNumbers: ["1", "2", "3", "4", "5"],
    image: "https://cdn.poehali.dev/files/25e93526-800f-43e4-8609-03d2fcca59f6.jpeg",
    images: [
      "https://cdn.poehali.dev/files/25e93526-800f-43e4-8609-03d2fcca59f6.jpeg",
      "https://cdn.poehali.dev/files/024ac71f-86f9-4272-b7fc-aa785414b9ee.jpeg",
      "https://cdn.poehali.dev/files/ce948d53-aa1e-4ca6-a3f9-c3b938d16cc8.jpeg",
      "https://cdn.poehali.dev/files/354c3720-235f-4e9f-9ceb-5d6e202e8a0c.jpeg",
      "https://cdn.poehali.dev/files/5e03854e-177b-4255-97bb-3362fc15c13b.jpeg"
    ],
    isNew: true,
    discount: null
  };

  const windbreakerProduct = {
    id: 2,
    name: "Ветровка Adidas Originals",
    price: "2800₽",
    sizes: ["S", "M", "L", "XL"],
    sizeNumbers: ["1", "2", "3", "4"],
    image: "https://cdn.poehali.dev/files/95f76274-dbc1-4a60-92ca-19899cb8deaa.jpeg",
    images: [
      "https://cdn.poehali.dev/files/95f76274-dbc1-4a60-92ca-19899cb8deaa.jpeg",
      "https://cdn.poehali.dev/files/5a3fab8b-1d3c-4bb6-bcf4-755347427efb.jpeg",
      "https://cdn.poehali.dev/files/dd062a81-04c5-4e2d-b916-02591f8c0008.jpeg",
      "https://cdn.poehali.dev/files/c9e22ebe-b419-4e48-8cb2-ac30209fa482.jpeg",
      "https://cdn.poehali.dev/files/786429c0-6cb4-4b9c-ae20-6eabc832df00.jpeg"
    ],
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
    },
    {
      id: 8,
      name: "Кроссовки Asics Gel Preleus",
      price: "3500₽",
      sizes: ["42 EU — 25 см", "43 EU — 26 см", "44 EU — 27 см", "45 EU — 28 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/12eea385-ce0a-4fa1-a87c-57ccbd8e94db.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 9,
      name: "Adidas Handball Spezial черные",
      price: "3000₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см", "45 EU — 29 см"],
      sizeNumbers: ["41", "42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/6335a974-6636-485b-ade9-e3d6629937d1.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 10,
      name: "Кроссовки Asics Gel Nyc",
      price: "3500₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см", "45 EU — 29,5 см"],
      sizeNumbers: ["41", "42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/04c0c9af-9d77-426f-ba30-6ddc5e4a17fc.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 11,
      name: "Кроссовки Adidas Handball Spezial синие",
      price: "3000₽",
      sizes: ["42 EU — 25,5 см", "43 EU — 26,5 см", "44 EU — 27,5 см", "45 EU — 28,5 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/47df6c10-8269-43b5-b99e-38637229fd24.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 12,
      name: "Кроссовки Asics Gel Kahana 8 черные",
      price: "3500₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см", "45 EU — 29,5 см", "46 EU — 30 см", "47 EU — 31 см", "48 EU — 32 см"],
      sizeNumbers: ["41", "42", "43", "44", "45", "46", "47", "48"],
      image: "https://cdn.poehali.dev/files/60aa6f6c-84d0-4c0c-88ef-1309a358e38d.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 13,
      name: "Кроссовки New Balance 530 белые",
      price: "3000₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см"],
      sizeNumbers: ["41", "42", "43", "44"],
      image: "https://cdn.poehali.dev/files/1d737981-2d09-4c05-8ab6-f6570769edd2.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 14,
      name: "Кроссовки Nike P-6000 черные",
      price: "3000₽",
      sizes: ["41 EU — 25,5 см", "42 EU — 26,5 см", "43 EU — 27,5 см", "44 EU — 28,5 см", "45 EU — 29,5 см"],
      sizeNumbers: ["41", "42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/79a65772-2350-4ca3-a90c-ffb127827584.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 15,
      name: "Crocs белые",
      price: "2000₽",
      sizes: ["36 EU — 20 см", "37 EU — 21 см", "38 EU — 22 см", "39 EU — 23 см", "40 EU — 24 см", "41 EU — 25 см"],
      sizeNumbers: ["36", "37", "38", "39", "40", "41"],
      image: "https://cdn.poehali.dev/files/e8f98d3a-960f-43bf-85f9-203b7db5c29e.jpeg",
      isNew: true,
      discount: null
    },
    {
      id: 16,
      name: "Кроссовки Adidas Handball Spezial серые",
      price: "3000₽",
      sizes: ["42 EU — 25,5 см", "43 EU — 26,5 см", "44 EU — 27,5 см", "45 EU — 28,5 см"],
      sizeNumbers: ["42", "43", "44", "45"],
      image: "https://cdn.poehali.dev/files/22359197-6765-4e80-a532-add85a5277ab.jpeg",
      isNew: true,
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

  const openCapModal = () => {
    setSelectedProduct(capProduct);
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
                  } else if (category.id === 'caps') {
                    openCapModal();
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
            : (selectedProduct.name.includes('Кроссовки') || selectedProduct.name.includes('Crocs') || (selectedProduct.name.includes('Adidas') && !selectedProduct.name.includes('Ветровка')) || selectedProduct.name.includes('New Balance') || selectedProduct.name.includes('Nike'))
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