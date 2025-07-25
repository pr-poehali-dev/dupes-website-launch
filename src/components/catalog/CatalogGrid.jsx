import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';

const CatalogGrid = ({ onCategorySelect }) => {
  return (
    <section id="catalog" className="py-16 bg-gray-50" data-section="catalog">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat text-4xl font-bold text-center text-slate mb-12">
          Каталог товаров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`p-6 ${category.bgClass} ${category.borderClass} hover:shadow-xl transition-all cursor-pointer group`}
            >
              <div className="flex items-center mb-4">
                <Icon 
                  name={category.icon} 
                  size={40} 
                  className={`${category.iconClass} mr-3 group-hover:scale-110 transition-transform`} 
                />
                <h3 className="font-montserrat font-bold text-xl text-slate">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Button 
                variant="outline" 
                className={`w-full ${category.buttonClass} hover:text-white`}
                onClick={() => onCategorySelect(category.id)}
              >
                Перейти в раздел
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogGrid;