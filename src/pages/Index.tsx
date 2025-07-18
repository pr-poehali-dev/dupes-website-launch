import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-light/5 to-emerald-light/10">
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img 
                src="https://cdn.poehali.dev/files/4b90b720-99f8-4afe-af1c-03a81655709c.jpeg" 
                alt="DUPES Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-slate font-medium hover:text-violet transition-colors">Главная</a>
                <a href="#catalog" className="text-slate font-medium hover:text-violet transition-colors">Каталог</a>
                <a href="#about" className="text-slate font-medium hover:text-violet transition-colors">О нас</a>
                <a href="#delivery" className="text-slate font-medium hover:text-violet transition-colors">Доставка</a>
                <a href="#contacts" className="text-slate font-medium hover:text-violet transition-colors">Контакты</a>
                <a href="#sizes" className="text-slate font-medium hover:text-violet transition-colors">Размеры</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-emerald/10 text-emerald border-emerald/20 hidden md:flex">
                <Icon name="Truck" size={14} className="mr-1" />
                Бесплатная доставка от 3000₽
              </Badge>
              <Button variant="outline" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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
              <Button size="lg" className="bg-violet hover:bg-violet-dark text-white font-montserrat font-semibold px-10 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-montserrat font-semibold px-10 py-5 text-lg rounded-xl">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
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

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center text-slate mb-12">
            Специальные предложения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-violet/10 to-violet/5 border-violet/20 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Icon name="Gift" size={32} className="text-violet mr-3" />
                <Badge className="bg-violet text-white">НОВИНКА</Badge>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-slate mb-2">Скидка 20%</h3>
              <p className="text-gray-600 mb-4">На первую покупку новым клиентам</p>
              <Button className="w-full bg-violet hover:bg-violet-dark text-white">
                Получить скидку
              </Button>
            </Card>
            
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
            
            <Card className="p-6 bg-gradient-to-br from-orange/10 to-orange/5 border-orange/20 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Icon name="RotateCcw" size={32} className="text-orange mr-3" />
                <Badge className="bg-orange text-white">ГАРАНТИЯ</Badge>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-slate mb-2">Возврат 7 дней</h3>
              <p className="text-gray-600 mb-4">Не подошло? Вернём деньги без вопросов</p>
              <Button variant="outline" className="w-full border-orange text-orange hover:bg-orange hover:text-white">
                Условия возврата
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-16 bg-gradient-to-br from-slate/5 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-slate mb-4">
              Наш каталог
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Огромный выбор модной одежды для всех стилей и случаев жизни
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Топы & Блузы", icon: "Shirt", color: "violet", items: "120+ товаров" },
              { title: "Брюки & Джинсы", icon: "Wallet", color: "emerald", items: "85+ товаров" },
              { title: "Платья", icon: "Heart", color: "orange", items: "95+ товаров" },
              { title: "Аксессуары", icon: "Star", color: "slate", items: "200+ товаров" },
              { title: "Верхняя одежда", icon: "ShirtIcon", color: "violet", items: "60+ товаров" },
              { title: "Обувь", icon: "Footprints", color: "emerald", items: "75+ товаров" },
              { title: "Спортивная", icon: "Dumbbell", color: "orange", items: "45+ товаров" },
              { title: "Нижнее бельё", icon: "ShirtIcon", color: "slate", items: "30+ товаров" }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-violet/20 bg-white">
                <div className={`bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={category.icon as any} size={32} className={`text-${category.color}`} />
                </div>
                <h3 className="font-montserrat font-semibold text-slate text-sm mb-2">{category.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{category.items}</p>
                <Button variant="outline" size="sm" className="w-full text-xs border-violet/30 text-violet hover:bg-violet hover:text-white">
                  Смотреть
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-violet hover:bg-violet-dark text-white font-montserrat font-semibold px-8 py-4">
              Посмотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Delivery Section */}
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

      {/* Sizes Guide */}
      <section id="sizes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-slate mb-4">
              Размерная сетка
            </h2>
            <p className="text-lg text-gray-600">
              Подберите идеальный размер с помощью нашей таблицы
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-slate/5 to-white border-2 border-slate/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate/20">
                      <th className="font-montserrat font-bold text-slate py-4 text-left">Размер</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">XS</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">S</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">M</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">L</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">XL</th>
                      <th className="font-montserrat font-bold text-slate py-4 text-center">XXL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="font-semibold text-gray-700 py-4">Грудь (см)</td>
                      <td className="text-center text-gray-600 py-4">80-84</td>
                      <td className="text-center text-gray-600 py-4">84-88</td>
                      <td className="text-center text-gray-600 py-4">88-92</td>
                      <td className="text-center text-gray-600 py-4">92-96</td>
                      <td className="text-center text-gray-600 py-4">96-100</td>
                      <td className="text-center text-gray-600 py-4">100-104</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="font-semibold text-gray-700 py-4">Талия (см)</td>
                      <td className="text-center text-gray-600 py-4">60-64</td>
                      <td className="text-center text-gray-600 py-4">64-68</td>
                      <td className="text-center text-gray-600 py-4">68-72</td>
                      <td className="text-center text-gray-600 py-4">72-76</td>
                      <td className="text-center text-gray-600 py-4">76-80</td>
                      <td className="text-center text-gray-600 py-4">80-84</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 py-4">Бёдра (см)</td>
                      <td className="text-center text-gray-600 py-4">86-90</td>
                      <td className="text-center text-gray-600 py-4">90-94</td>
                      <td className="text-center text-gray-600 py-4">94-98</td>
                      <td className="text-center text-gray-600 py-4">98-102</td>
                      <td className="text-center text-gray-600 py-4">102-106</td>
                      <td className="text-center text-gray-600 py-4">106-110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <Icon name="Ruler" size={48} className="text-violet mx-auto mb-4" />
                  <h4 className="font-montserrat font-semibold text-slate mb-2">Как правильно измерить?</h4>
                  <p className="text-sm text-gray-600">
                    Измеряйте объёмы по самым выступающим точкам, плотно, но не стягивая сантиметровую ленту
                  </p>
                </div>
                <div className="text-center">
                  <Icon name="MessageCircle" size={48} className="text-emerald mx-auto mb-4" />
                  <h4 className="font-montserrat font-semibold text-slate mb-2">Нужна помощь?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Наш менеджер поможет подобрать идеальный размер
                  </p>
                  <Button className="bg-emerald hover:bg-emerald-dark text-white">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Связаться с менеджером
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-slate text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <div className="bg-emerald/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Телефон менеджера</h3>
              <p className="text-white/80 mb-3">
                <a href="tel:+79029903444" className="hover:text-emerald transition-colors text-lg font-medium">
                  +7 (902) 990-34-44
                </a>
              </p>
              <p className="text-white/60 text-sm mb-4">
                <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
                  @Dupes_manager
                </a>
              </p>
              <p className="text-white/60 text-xs">Ответим в течение 5 минут</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="bg-orange/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Send" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Telegram канал</h3>
              <p className="text-white/80 mb-6">Следите за новинками, акциями и получайте эксклюзивные скидки</p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white font-semibold">
                <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                  Подписаться
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
                <Icon name="RotateCcw" size={24} className="text-orange mr-2" />
                <span className="text-white/80">Возврат 7 дней</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/4b90b720-99f8-4afe-af1c-03a81655709c.jpeg" 
                  alt="DUPES Logo" 
                  className="h-10 w-auto object-contain mr-3"
                />
                <span className="font-montserrat font-bold text-xl">DUPES</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Модная одежда по доступным ценам. Твой стиль — наша забота.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Женская одежда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мужская одежда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новинки</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#sizes" className="hover:text-white transition-colors">Размерная сетка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат и обмен</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-violet transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 DUPES. Все права защищены.
              </p>
              <p className="text-white/60 text-sm mt-4 md:mt-0">
                Сделано с ❤️ для любителей стиля
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;