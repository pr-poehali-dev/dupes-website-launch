import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet/10 via-emerald/10 to-orange/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-montserrat text-6xl md:text-8xl font-bold text-slate mb-6 tracking-tight">
            DUPES
          </h1>
          <p className="text-2xl md:text-3xl text-slate-light mb-4 font-medium">
            Твой стиль. Твои цены. 🔥
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ищешь модную и качественную одежду по низким ценам с обширным ассортиментом? 
            Тебе к нам — магазин DUPES!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-violet hover:bg-violet-dark text-white font-montserrat font-semibold px-10 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-montserrat font-semibold px-10 py-5 text-lg rounded-xl">
              <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-violet mb-2">1000+</div>
              <p className="text-gray-600 text-sm">Товаров</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-emerald mb-2">500+</div>
              <p className="text-gray-600 text-sm">Клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-orange mb-2">24/7</div>
              <p className="text-gray-600 text-sm">Поддержка</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-slate mb-2">7 дней</div>
              <p className="text-gray-600 text-sm">Возврат</p>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-violet/10 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-br from-violet/20 to-violet/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-violet" />
              </div>
              <h3 className="font-montserrat font-semibold text-slate mb-2 text-lg">Доставка по РФ</h3>
              <p className="text-gray-600">Быстрая доставка по всей России от 1 дня</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald/10 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-br from-emerald/20 to-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shirt" size={32} className="text-emerald" />
              </div>
              <h3 className="font-montserrat font-semibold text-slate mb-2 text-lg">Модная одежда</h3>
              <p className="text-gray-600">Актуальные тренды и стили каждый сезон</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-orange/10 hover:shadow-lg transition-all">
              <div className="bg-gradient-to-br from-orange/20 to-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-orange" />
              </div>
              <h3 className="font-montserrat font-semibold text-slate mb-2 text-lg">Низкие цены</h3>
              <p className="text-gray-600">Доступные цены без компромиссов в качестве</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;