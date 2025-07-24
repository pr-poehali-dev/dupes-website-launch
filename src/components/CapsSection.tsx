import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface Cap {
  id: number;
  name: string;
  price: string;
  sizes: string[];
  sizeNumbers: string[];
  image: string;
  isNew: boolean;
  discount: string | null;
}

interface CapsSectionProps {
  onBack: () => void;
}

export default function CapsSection({ onBack }: CapsSectionProps) {
  const [selectedCap, setSelectedCap] = useState<Cap | null>(null);

  const caps: Cap[] = [
    {
      id: 1,
      name: "Кепка Diesel",
      price: "1700₽",
      sizes: ["One Size — 56-60 см"],
      sizeNumbers: ["One Size"],
      image: "https://cdn.poehali.dev/files/90b65f07-773b-48d6-84b5-e150790febc2.jpeg",
      isNew: true,
      discount: null
    }
  ];

  const handleCapClick = (cap: Cap) => {
    setSelectedCap(cap);
  };

  const closeModal = () => {
    setSelectedCap(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <Icon name="ArrowLeft" size={20} />
          Назад
        </button>
        <h1 className="text-xl font-bold">Кепки</h1>
        <div className="w-16"></div>
      </div>

      {/* Caps Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {caps.map((cap) => (
            <div
              key={cap.id}
              onClick={() => handleCapClick(cap)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={cap.image}
                  alt={cap.name}
                  className="w-full h-48 object-cover"
                />
                {cap.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Новый
                  </span>
                )}
                {cap.discount && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {cap.discount}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 mb-1">{cap.name}</h3>
                <p className="text-lg font-bold text-gray-900">{cap.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">Детали товара</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <img
                src={selectedCap.image}
                alt={selectedCap.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-bold mb-2">{selectedCap.name}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{selectedCap.price}</p>

              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Описание</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Стильная джинсовая кепка Diesel с фирменным красным логотипом. 
                  Изготовлена из качественного денима с эффектом потертости. 
                  Классический дизайн с регулируемой застежкой сзади. 
                  Идеально дополнит casual образ и подчеркнет ваш стиль.
                </p>
              </div>

              {/* Characteristics */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Характеристики</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бренд:</span>
                    <span>Diesel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Материал:</span>
                    <span>Деним</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Цвет:</span>
                    <span>Синий (деним)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Размер:</span>
                    <span>Универсальный</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Размеры</h4>
                <div className="flex flex-col gap-2">
                  {selectedCap.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="py-3 px-4 border border-gray-200 rounded-lg text-left hover:border-gray-400 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Заказать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}