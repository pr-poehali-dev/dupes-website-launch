import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Корзина пуста');
      return;
    }

    const orderDetails = items.map(item => 
      `${item.name} (Размер: ${item.size}, Кол-во: ${item.quantity})`
    ).join('\n');
    
    const totalPrice = getTotalPrice();
    const message = `Заказ:\n${orderDetails}\n\nОбщая сумма: ${totalPrice}₽`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79029903444?text=${encodedMessage}`, '_blank');
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getTotalPrice();
  const deliveryPrice = totalPrice >= 3000 ? 0 : 300;
  const finalPrice = totalPrice + deliveryPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-light/5 to-emerald-light/10">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к покупкам
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-slate">Корзина</h1>
        </div>

        {items.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Icon name="ShoppingBag" size={64} className="mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold mb-2">Корзина пуста</h2>
              <p className="text-gray-600 mb-4">Добавьте товары, чтобы начать покупки</p>
              <Link to="/">
                <Button className="bg-violet hover:bg-violet/90">
                  Перейти к покупкам
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.size}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600">Размер: {item.size}</p>
                        <p className="text-violet font-semibold text-lg">
                          {item.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Товары ({totalItems} шт.)</span>
                    <span>{totalPrice.toLocaleString('ru-RU')}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-emerald">
                      {deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice}₽`}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>К оплате</span>
                    <span>{finalPrice.toLocaleString('ru-RU')}₽</span>
                  </div>
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-violet hover:bg-violet/90" 
                    size="lg"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Оформить заказ в WhatsApp
                  </Button>
                  {totalPrice < 3000 && (
                    <p className="text-sm text-gray-600 text-center">
                      Добавьте товаров на {(3000 - totalPrice).toLocaleString('ru-RU')}₽ для бесплатной доставки
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}