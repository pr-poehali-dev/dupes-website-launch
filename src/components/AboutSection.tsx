import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-slate mb-8">Почему выбирают DUPES?</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ищешь модную и качественную одежду по низким ценам с обширным ассортиментом? 
              Тебе к нам — магазин DUPES!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-violet/10 to-transparent border-violet/20">
              <Icon name="TrendingUp" size={48} className="text-violet mb-4" />
              <h3 className="font-montserrat text-xl font-bold text-slate mb-4">Актуальные тренды</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы следим за последними модными тенденциями и обновляем ассортимент каждую неделю, 
                чтобы вы всегда были в тренде.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-emerald/10 to-transparent border-emerald/20">
              <Icon name="BadgePercent" size={48} className="text-emerald mb-4" />
              <h3 className="font-montserrat text-xl font-bold text-slate mb-4">Доступные цены</h3>
              <p className="text-gray-600 leading-relaxed">
                Качественная одежда не должна стоить дорого. Мы работаем напрямую с производителями, 
                чтобы предложить вам лучшие цены.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-orange/10 to-transparent border-orange/20">
              <Icon name="Sparkles" size={48} className="text-orange mb-4" />
              <h3 className="font-montserrat text-xl font-bold text-slate mb-4">Высокое качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Каждая вещь проходит строгий контроль качества. Мы гарантируем, что вы получите 
                товар, который прослужит долго.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-slate/10 to-transparent border-slate/20">
              <Icon name="Users" size={48} className="text-slate mb-4" />
              <h3 className="font-montserrat text-xl font-bold text-slate mb-4">Персональный подход</h3>
              <p className="text-gray-600 leading-relaxed">
                Наши менеджеры помогут подобрать идеальный образ и ответят на любые вопросы. 
                Мы заботимся о каждом клиенте.
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-bold text-violet mb-2">1000+</div>
              <p className="text-gray-600">Единиц товара</p>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-emerald mb-2">500+</div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-orange mb-2">98%</div>
              <p className="text-gray-600">Положительных отзывов</p>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-slate mb-2">2 года</div>
              <p className="text-gray-600">На рынке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;