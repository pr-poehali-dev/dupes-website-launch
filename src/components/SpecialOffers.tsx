import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const SpecialOffers = () => {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-4xl font-bold text-center text-slate mb-12">
          Специальные предложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <Card className="p-6 bg-gradient-to-br from-emerald/10 to-emerald/5 border-emerald/20 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <Icon name="Truck" size={32} className="text-emerald mr-3" />
              <Badge className="bg-emerald text-white">ДОСТАВКА</Badge>
            </div>
            <h3 className="font-montserrat font-bold text-xl text-slate mb-2">Бесплатная доставка</h3>
            <p className="text-gray-600 mb-4">При заказе от 3000 рублей</p>
            <Button 
              variant="outline" 
              className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white"
              onClick={() => setIsDeliveryModalOpen(true)}
            >
              Подробнее
            </Button>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-violet/10 to-violet/5 border-violet/20 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <Icon name="Percent" size={32} className="text-violet mr-3" />
              <Badge className="bg-violet text-white">СКИДКИ</Badge>
            </div>
            <h3 className="font-montserrat font-bold text-xl text-slate mb-2">Скидки и акции</h3>
            <p className="text-gray-600 mb-4">Все акции и скидки в нашем Telegram канале</p>
            <Button 
              asChild
              variant="outline" 
              className="w-full border-violet text-violet hover:bg-violet hover:text-white"
            >
              <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                Посмотреть скидки
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </a>
            </Button>
          </Card>
        </div>
      </div>

      <Dialog open={isDeliveryModalOpen} onOpenChange={setIsDeliveryModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <Icon name="Truck" size={28} className="text-emerald" />
              <DialogTitle className="text-xl font-montserrat font-bold text-slate">
                Условия бесплатной доставки
              </DialogTitle>
            </div>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-emerald/10 border border-emerald/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="CheckCircle" size={20} className="text-emerald" />
                <span className="font-semibold text-emerald">Бесплатная доставка</span>
              </div>
              <p className="text-gray-600">
                При сумме заказа от <span className="font-bold text-emerald">3 000 рублей</span> доставка осуществляется абсолютно бесплатно по всей территории доставки.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Info" size={20} className="text-gray-600" />
                <span className="font-semibold text-gray-700">Платная доставка</span>
              </div>
              <p className="text-gray-600">
                Если сумма заказа менее 3 000 рублей, стоимость доставки составляет <span className="font-bold">300 рублей</span> и будет добавлена к общей сумме заказа.
              </p>
            </div>

            <div className="bg-violet/10 border border-violet/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Lightbulb" size={20} className="text-violet" />
                <span className="font-semibold text-violet">Совет</span>
              </div>
              <p className="text-gray-600">
                Добавьте товаров на сумму от 3 000 рублей, чтобы получить бесплатную доставку и сэкономить 300 рублей!
              </p>
            </div>

            <Button 
              onClick={() => setIsDeliveryModalOpen(false)}
              className="w-full bg-emerald hover:bg-emerald/90 text-white"
            >
              Понятно
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SpecialOffers;