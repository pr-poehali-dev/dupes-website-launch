import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Футболка классическая',
      price: 1990,
      quantity: 2,
      image: '/api/placeholder/100/100',
      size: 'M'
    },
    {
      id: '2', 
      name: 'Худи премиум',
      price: 3490,
      quantity: 1,
      image: '/api/placeholder/100/100',
      size: 'L'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white">
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

        {cartItems.length === 0 ? (
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
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        {item.size && (
                          <p className="text-gray-600">Размер: {item.size}</p>
                        )}
                        <p className="text-violet font-semibold text-lg">
                          {item.price.toLocaleString('ru-RU')}₽
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, 0)}
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
                    <span>Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                    <span>{totalPrice.toLocaleString('ru-RU')}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-emerald">
                      {totalPrice >= 3000 ? 'Бесплатно' : '300₽'}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>К оплате</span>
                    <span>{(totalPrice < 3000 ? totalPrice + 300 : totalPrice).toLocaleString('ru-RU')}₽</span>
                  </div>
                  <Button className="w-full bg-violet hover:bg-violet/90" size="lg">
                    Оформить заказ
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    {totalPrice < 3000 && (
                      <>Добавьте товаров на {(3000 - totalPrice).toLocaleString('ru-RU')}₽ для бесплатной доставки</>
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}