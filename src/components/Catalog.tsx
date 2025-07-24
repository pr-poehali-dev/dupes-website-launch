import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities(prev => {
      const current = prev[productId] || 1;
      const newQuantity = Math.max(1, current + change);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    const selectedSize = selectedSizes[productId];
    const quantity = quantities[productId] || 1;

    if (!product || !selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0]
    }, quantity);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-dark to-emerald-primary bg-clip-text text-transparent mb-6">
            Каталог товаров
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Эксклюзивная коллекция премиальной уличной одежды
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const selectedSize = selectedSizes[product.id];
            const quantity = quantities[product.id] || 1;

            return (
              <div key={product.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-50">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-3xl font-bold text-violet-600 mb-4">{product.price}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Выберите размер
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {product.availableSizes.map(({ size, count }) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(product.id, size)}
                            className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                              selectedSize === size
                                ? 'bg-violet-600 text-white border-violet-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-violet-400'
                            } ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={count === 0}
                          >
                            {size} {count > 0 && `(${count})`}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Количество
                      </label>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <button
                          onClick={() => handleQuantityChange(product.id, -1)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Icon name="Minus" size={16} />
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(product.id, 1)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Icon name="Plus" size={16} />
                        </button>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Характеристики</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Материал:</span>
                        <span>{product.specifications.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Цвет:</span>
                        <span>{product.specifications.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Бренд:</span>
                        <span>{product.specifications.brand}</span>
                      </div>
                      {product.specifications.print && (
                        <div className="flex justify-between">
                          <span>Принт:</span>
                          <span>{product.specifications.print}</span>
                        </div>
                      )}
                      {product.specifications.features && (
                        <div className="flex justify-between">
                          <span>Особенности:</span>
                          <span>{product.specifications.features}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;