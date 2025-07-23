import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;