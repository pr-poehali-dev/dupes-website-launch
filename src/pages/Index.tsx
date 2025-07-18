import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-turquoise-light/20">
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img 
                src="https://cdn.poehali.dev/files/4b90b720-99f8-4afe-af1c-03a81655709c.jpeg" 
                alt="DUPES Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-navy font-medium hover:text-coral transition-colors">Главная</a>
                <a href="#catalog" className="text-navy font-medium hover:text-coral transition-colors">Каталог</a>
                <a href="#about" className="text-navy font-medium hover:text-coral transition-colors">О нас</a>
                <a href="#delivery" className="text-navy font-medium hover:text-coral transition-colors">Доставка</a>
                <a href="#contacts" className="text-navy font-medium hover:text-coral transition-colors">Контакты</a>
                <a href="#sizes" className="text-navy font-medium hover:text-coral transition-colors">Размеры</a>
              </div>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-turquoise/10 to-navy/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-navy mb-6">
              DUPES
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Модная одежда для стильной молодёжи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-coral hover:bg-coral-dark text-white font-montserrat font-semibold px-8 py-4 text-lg">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white font-montserrat font-semibold px-8 py-4 text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-coral" />
                </div>
                <h3 className="font-montserrat font-semibold text-navy mb-2">Доставка по РФ</h3>
                <p className="text-gray-600">Быстрая доставка по всей России</p>
              </div>
              <div className="text-center">
                <div className="bg-turquoise/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={32} className="text-turquoise" />
                </div>
                <h3 className="font-montserrat font-semibold text-navy mb-2">Модная одежда</h3>
                <p className="text-gray-600">Актуальные тренды и стили</p>
              </div>
              <div className="text-center">
                <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-navy" />
                </div>
                <h3 className="font-montserrat font-semibold text-navy mb-2">Для молодёжи</h3>
                <p className="text-gray-600">Стиль для активной жизни</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center text-navy mb-12">
            Наш каталог
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Топы", icon: "Shirt" },
              { title: "Брюки", icon: "Wallet" },
              { title: "Платья", icon: "Heart" },
              { title: "Аксессуары", icon: "Star" }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-coral/20">
                <div className="bg-gradient-to-br from-coral/10 to-turquoise/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={category.icon as any} size={40} className="text-coral" />
                </div>
                <h3 className="font-montserrat font-semibold text-navy text-lg mb-3">{category.title}</h3>
                <Button variant="outline" size="sm" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                  Смотреть
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-turquoise/10 to-coral/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat text-4xl font-bold text-navy mb-8">О нас</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              DUPES — это молодой и динамичный магазин модной одежды, созданный для тех, 
              кто ценит стиль, качество и индивидуальность. Мы предлагаем актуальные 
              тренды по доступным ценам.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-coral mb-2">500+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">1000+</div>
                <p className="text-gray-600">Единиц товара</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center text-navy mb-12">
            Доставка и оплата
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-coral/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Truck" size={24} className="text-coral" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold text-navy">Доставка</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-turquoise mr-3" />
                  Доставка по всей России
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-turquoise mr-3" />
                  Курьерская доставка в Красноярске
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-turquoise mr-3" />
                  Самовывоз из магазина
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-turquoise mr-3" />
                  Отправка СДЭК и Почтой России
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-turquoise/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Icon name="CreditCard" size={24} className="text-turquoise" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold text-navy">Оплата</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-coral mr-3" />
                  Наличными при получении
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-coral mr-3" />
                  Банковской картой
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-coral mr-3" />
                  Переводом на карту
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-coral mr-3" />
                  Через СБП
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Sizes Guide */}
      <section id="sizes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center text-navy mb-12">
            Размерная сетка
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="font-montserrat font-semibold text-navy py-3">Размер</th>
                      <th className="font-montserrat font-semibold text-navy py-3">XS</th>
                      <th className="font-montserrat font-semibold text-navy py-3">S</th>
                      <th className="font-montserrat font-semibold text-navy py-3">M</th>
                      <th className="font-montserrat font-semibold text-navy py-3">L</th>
                      <th className="font-montserrat font-semibold text-navy py-3">XL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="font-medium text-gray-700 py-3">Грудь (см)</td>
                      <td className="text-gray-600 py-3">80-84</td>
                      <td className="text-gray-600 py-3">84-88</td>
                      <td className="text-gray-600 py-3">88-92</td>
                      <td className="text-gray-600 py-3">92-96</td>
                      <td className="text-gray-600 py-3">96-100</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="font-medium text-gray-700 py-3">Талия (см)</td>
                      <td className="text-gray-600 py-3">60-64</td>
                      <td className="text-gray-600 py-3">64-68</td>
                      <td className="text-gray-600 py-3">68-72</td>
                      <td className="text-gray-600 py-3">72-76</td>
                      <td className="text-gray-600 py-3">76-80</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700 py-3">Бёдра (см)</td>
                      <td className="text-gray-600 py-3">86-90</td>
                      <td className="text-gray-600 py-3">90-94</td>
                      <td className="text-gray-600 py-3">94-98</td>
                      <td className="text-gray-600 py-3">98-102</td>
                      <td className="text-gray-600 py-3">102-106</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Нужна помощь с выбором размера? Свяжитесь с нашим менеджером!
                </p>
                <Button className="bg-coral hover:bg-coral-dark text-white">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Связаться с менеджером
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="bg-coral/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-coral" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Адрес магазина</h3>
              <p className="text-white/80">
                г. Красноярск<br />
                ул. Шумяцкого, 5
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="bg-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-turquoise" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Телефон менеджера</h3>
              <p className="text-white/80 mb-2">
                <a href="tel:+79029903444" className="hover:text-coral transition-colors">
                  +7 (902) 990-34-44
                </a>
              </p>
              <p className="text-white/60 text-sm">
                <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise transition-colors">
                  @Dupes_manager
                </a>
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Telegram канал</h3>
              <p className="text-white/80 mb-4">Следите за новинками и акциями</p>
              <Button asChild className="bg-coral hover:bg-coral-dark text-white">
                <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer">
                  Подписаться
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </a>
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60">
              Доставка осуществляется по всей России 🚚
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/4b90b720-99f8-4afe-af1c-03a81655709c.jpeg" 
                alt="DUPES Logo" 
                className="h-8 w-auto object-contain mr-3"
              />
              <span className="font-montserrat font-semibold text-lg">DUPES</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://t.me/Dupes_manager" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 DUPES. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;