import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" data-section="contacts" className="py-16 bg-slate text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-4xl font-bold text-center mb-12">
          Контакты
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
            <div className="bg-violet/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MapPin" size={40} className="text-white" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Адрес магазина</h3>
            <p className="text-white/80 mb-4">
              г. Красноярск<br />
              ул. Шумяцкого, 5
            </p>
            <p className="text-white/60 text-sm">Ежедневно с 10:00 до 21:00</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
            <div className="bg-orange/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Send" size={40} className="text-white" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Telegram менеджер</h3>
            <p className="text-white/80 mb-6">Наш менеджер поможет с выбором и оформлением заказа</p>
            <p className="text-white/60 text-sm mb-4">
              <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
                @Dupes_manager
              </a>
            </p>
            <Button asChild className="bg-orange hover:bg-orange-dark text-white font-semibold">
              <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer">
                Написать
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </a>
            </Button>
          </Card>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Icon name="Truck" size={24} className="text-emerald mr-2" />
              <span className="text-white/80">Доставка по всей России</span>
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={24} className="text-violet mr-2" />
              <span className="text-white/80">Гарантия качества</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" size={24} className="text-orange mr-2" />
              <span className="text-white/80">Быстрая обработка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;