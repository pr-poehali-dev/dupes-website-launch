import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const CategoryCard = ({ category, onClick }) => {
  return (
    <Card 
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
        onClick={() => onClick(category.id)}
      >
        Перейти в раздел
      </Button>
    </Card>
  );
};

export default CategoryCard;