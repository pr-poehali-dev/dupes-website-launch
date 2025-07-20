import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const TelegramCatalog = () => {
  return (
    <section id="catalog" className="py-16 bg-gradient-to-br from-slate/5 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold text-slate mb-4">
            Весь ассортимент в Telegram
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Огромный выбор модной одежды, актуальные новинки, акции и скидки — всё это 
            в нашем Telegram канале! Подпишись и будь в курсе всех трендов 🔥
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-violet/10 via-emerald/5 to-orange/10 border-2 border-violet/20 text-center">
            <div className="bg-gradient-to-br from-violet/30 to-emerald/20 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Icon name="Send" size={48} className="text-white" />
            </div>
            
            <h3 className="font-montserrat text-3xl font-bold text-slate mb-6">
              @dupeess
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-violet/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={32} className="text-violet" />
                </div>
                <h4 className="font-semibold text-slate mb-2">Полный каталог</h4>
                <p className="text-sm text-gray-600">Вся одежда и аксессуары в одном месте</p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-emerald" />
                </div>
                <h4 className="font-semibold text-slate mb-2">Новинки первыми</h4>
                <p className="text-sm text-gray-600">Узнавай о поступлениях раньше всех</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Tag" size={32} className="text-orange" />
                </div>
                <h4 className="font-semibold text-slate mb-2">Эксклюзивные скидки</h4>
                <p className="text-sm text-gray-600">Специальные предложения для подписчиков</p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-violet mb-1">1000+</div>
                  <p className="text-xs text-gray-600">товаров</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald mb-1">Ежедневно</div>
                  <p className="text-xs text-gray-600">новинки</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange mb-1">-30%</div>
                  <p className="text-xs text-gray-600">скидки</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate mb-1">24/7</div>
                  <p className="text-xs text-gray-600">доступ</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-violet to-emerald hover:from-violet-dark hover:to-emerald-dark text-white font-montserrat font-bold px-12 py-5 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all">
              <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                Перейти в каталог
                <Icon name="ExternalLink" size={24} className="ml-3" />
              </a>
            </Button>
            
            <p className="text-sm text-gray-500 mt-4"></p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TelegramCatalog;