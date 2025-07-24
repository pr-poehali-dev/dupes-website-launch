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

      {/* Caps List */}
      <div className="p-4 space-y-4">
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
                className="w-full h-64 object-cover"
              />
              {cap.isNew && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded">
                  Новый
                </span>
              )}
              {cap.discount && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-sm px-3 py-1 rounded">
                  {cap.discount}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">{cap.name}</h3>
              <p className="text-xl font-bold text-gray-900">{cap.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCap && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon name="X" size={24} />
              </button>
              <h2 className="text-lg font-semibold text-gray-700">{selectedCap.name}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="hover:text-gray-700">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <span>1 из 1</span>
              <button className="hover:text-gray-700">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex h-[calc(100vh-64px)]">
            {/* Left side - Image */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 p-8">
              <img
                src={selectedCap.image}
                alt={selectedCap.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Right side - Details */}
            <div className="w-96 p-6 overflow-y-auto bg-white border-l">
              <div className="mb-6">
                <p className="text-3xl font-bold text-purple-600 mb-4">{selectedCap.price}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Описание товара</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Стильная джинсовая кепка Diesel с фирменным красным логотипом. 
                  Изготовлена из качественного денима с эффектом потертости. 
                  Классический дизайн с регулируемой застежкой сзади. 
                  Идеально дополнит casual образ и подчеркнет ваш стиль.
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Выберите размер</h4>
                <div className="space-y-2">
                  {selectedCap.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="w-full py-3 px-4 border border-gray-200 rounded-lg text-left hover:border-gray-400 transition-colors text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Характеристики</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Материал:</span>
                    <span className="font-medium">Деним</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Цвет:</span>
                    <span className="font-medium">Синий/Белый</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Бренд:</span>
                    <span className="font-medium">Diesel</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Тип:</span>
                    <span className="font-medium">Бейсболка</span>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <button className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Заказать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}