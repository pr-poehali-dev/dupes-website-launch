import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const SizesGuide = () => {
  return (
    <section id="sizes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold text-slate mb-4">
            Размерные сетки
          </h2>
          <p className="text-lg text-gray-600">
            Подберите идеальный размер с помощью наших таблиц
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Одежда */}
          <Card className="p-8 bg-gradient-to-br from-violet/5 to-white border-2 border-violet/10">
            <h3 className="font-montserrat text-2xl font-bold text-violet mb-6 text-center">Одежда</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-violet/20">
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
          </Card>

          {/* Обувь */}
          <Card className="p-8 bg-gradient-to-br from-emerald/5 to-white border-2 border-emerald/10">
            <h3 className="font-montserrat text-2xl font-bold text-emerald mb-6 text-center">Обувь</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-emerald/20">
                    <th className="font-montserrat font-bold text-slate py-4 text-left">Российский размер</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">36</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">37</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">38</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">39</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">40</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">41</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">42</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">43</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">44</th>
                    <th className="font-montserrat font-bold text-slate py-4 text-center">45</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="font-semibold text-gray-700 py-4">Длина стопы (см)</td>
                    <td className="text-center text-gray-600 py-4">23</td>
                    <td className="text-center text-gray-600 py-4">23.5</td>
                    <td className="text-center text-gray-600 py-4">24</td>
                    <td className="text-center text-gray-600 py-4">24.5</td>
                    <td className="text-center text-gray-600 py-4">25</td>
                    <td className="text-center text-gray-600 py-4">25.5</td>
                    <td className="text-center text-gray-600 py-4">26</td>
                    <td className="text-center text-gray-600 py-4">26.5</td>
                    <td className="text-center text-gray-600 py-4">27</td>
                    <td className="text-center text-gray-600 py-4">27.5</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-700 py-4">EUR размер</td>
                    <td className="text-center text-gray-600 py-4">36</td>
                    <td className="text-center text-gray-600 py-4">37</td>
                    <td className="text-center text-gray-600 py-4">38</td>
                    <td className="text-center text-gray-600 py-4">39</td>
                    <td className="text-center text-gray-600 py-4">40</td>
                    <td className="text-center text-gray-600 py-4">41</td>
                    <td className="text-center text-gray-600 py-4">42</td>
                    <td className="text-center text-gray-600 py-4">43</td>
                    <td className="text-center text-gray-600 py-4">44</td>
                    <td className="text-center text-gray-600 py-4">45</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </Card>
        </div>
        
        {/* Помощь с выбором */}
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-br from-orange/5 to-white border-2 border-orange/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <Icon name="Ruler" size={48} className="text-orange mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-slate mb-2">Как правильно измерить?</h4>
                <p className="text-sm text-gray-600">
                  Для одежды: измеряйте объёмы по самым выступающим точкам, плотно, но не стягивая сантиметровую ленту.<br/>
                  Для обуви: измеряйте длину стопы от пятки до самого длинного пальца.
                </p>
              </div>
              <div className="text-center">
                <Icon name="MessageCircle" size={48} className="text-emerald mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-slate mb-2">Нужна помощь?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Наш менеджер поможет подобрать идеальный размер
                </p>
                <Button asChild className="bg-emerald hover:bg-emerald-dark text-white">
                  <a href="tel:+79029903444">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться с менеджером
                  </a>
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