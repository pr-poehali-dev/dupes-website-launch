import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
              <li><a href="#catalog" className="hover:text-white transition-colors">Худи</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Ветровки</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Футболки</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Кроссовки</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#delivery" className="hover:text-white transition-colors">Доставка и оплата</a></li>

              <li><a href="https://t.me/dupeess" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Скидки</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">

              <a href="mailto:info@dupes.ru" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-violet transition-colors">
                <Icon name="Mail" size={20} />
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
  );
};

export default Footer;