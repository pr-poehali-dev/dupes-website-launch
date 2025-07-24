import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-16 bg-gradient-to-br from-slate/5 to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-4xl font-bold text-center text-slate mb-12">
          Доставка и оплата
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-white border-2 border-emerald/20">
            <div className="flex items-center mb-6">
              <div className="bg-emerald/10 w-14 h-14 rounded-2xl flex items-center justify-center mr-4">
                <Icon name="Truck" size={28} className="text-emerald" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold text-slate">Доставка</h3>
                <p className="text-sm text-gray-500">Быстро и надёжно</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-emerald mr-3 flex-shrink-0" />
                <span><strong>По всей России</strong> — СДЭК, Почта России</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-emerald mr-3 flex-shrink-0" />
                <span><strong>Красноярск</strong> — курьер или самовывоз</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-emerald mr-3 flex-shrink-0" />
                <span><strong>Бесплатно</strong> при заказе от 3000₽</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-emerald mr-3 flex-shrink-0" />
                <span><strong>Сроки</strong> — от 1 до 7 дней</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-emerald/5 rounded-xl">
              <p className="text-sm text-emerald font-medium">
                💡 Заказы до 15:00 отправляем в тот же день!
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white border-2 border-violet/20">
            <div className="flex items-center mb-6">
              <div className="bg-violet/10 w-14 h-14 rounded-2xl flex items-center justify-center mr-4">
                <Icon name="CreditCard" size={28} className="text-violet" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold text-slate">Оплата</h3>
                <p className="text-sm text-gray-500">Удобно и безопасно</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-violet mr-3 flex-shrink-0" />
                <span><strong>Наличными</strong> курьеру или в магазине</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-violet mr-3 flex-shrink-0" />
                <span><strong>Банковской картой</strong> online или курьеру</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-violet mr-3 flex-shrink-0" />
                <span><strong>Переводом на карту</strong> Сбербанк</span>
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={18} className="text-violet mr-3 flex-shrink-0" />
                <span><strong>Через СБП</strong> — мгновенно</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-violet/5 rounded-xl">
              <p className="text-sm text-violet font-medium">
                🔒 Все платежи защищены и конфиденциальны
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;