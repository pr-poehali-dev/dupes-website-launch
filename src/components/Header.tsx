import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

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
              <a 
                href={location.pathname === '/' ? "#home" : "/"} 
                className="text-slate font-medium hover:text-violet transition-colors"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    const homeSection = document.querySelector('[data-section="home"]') || document.querySelector('body');
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    e.preventDefault();
                    navigate('/');
                  }
                }}
              >
                Главная
              </a>
              <a 
                href="#catalog" 
                className="text-slate font-medium hover:text-violet transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const catalogSection = document.querySelector('[data-section="catalog"]');
                  if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Каталог
              </a>
              <a 
                href="#about" 
                className="text-slate font-medium hover:text-violet transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.querySelector('[data-section="about"]');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                О нас
              </a>
              <a 
                href="#delivery" 
                className="text-slate font-medium hover:text-violet transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const deliverySection = document.querySelector('[data-section="delivery"]');
                  if (deliverySection) {
                    deliverySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Доставка
              </a>
              <a 
                href="#contacts" 
                className="text-slate font-medium hover:text-violet transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const contactsSection = document.querySelector('[data-section="contacts"]');
                  if (contactsSection) {
                    contactsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Контакты
              </a>

            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-emerald/10 text-emerald border-emerald/20 hidden md:flex">
              <Icon name="Truck" size={14} className="mr-1" />
              Бесплатная доставка от 3000₽
            </Badge>
            <Button 
              variant="outline" 
              className="relative border-violet text-violet hover:bg-violet hover:text-white transition-colors"
              onClick={() => navigate('/cart')}
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
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