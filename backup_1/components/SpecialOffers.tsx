import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const SpecialOffers = () => {
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
            <Button variant="outline" className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white">
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
    </section>
  );
};

export default SpecialOffers;