import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const SizesGuide = () => {
  return (
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
  );
};

export default SizesGuide;