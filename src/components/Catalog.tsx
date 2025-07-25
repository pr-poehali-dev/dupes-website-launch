import { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'GTX 1660ti',
    specs: '+i5 10400f+DDR4 16Gb',
    price: 41990,
    oldPrice: 49500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 2,
    name: 'RTX 2060 super',
    specs: '+i5 10400f+DDR4 16Gb',
    price: 46990,
    oldPrice: 58500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 3,
    name: 'RTX 4060',
    specs: '+i3 12100f+DDR4 16Gb',
    price: 63990,
    oldPrice: 76500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 4,
    name: 'RTX 4060',
    specs: '+ i5 10400f + DDR4 16Gb',
    price: 65500,
    oldPrice: 77990,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 5,
    name: 'RTX 3060',
    specs: '+i5 10400f+DDR4 16Gb',
    price: 55990,
    oldPrice: 68500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 6,
    name: 'RTX 3070',
    specs: '+i5 11400f+DDR4 16Gb',
    price: 72990,
    oldPrice: 89500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 7,
    name: 'RTX 4070',
    specs: '+i5 12400f+DDR4 16Gb',
    price: 89990,
    oldPrice: 105500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: null
  },
  {
    id: 8,
    name: 'RTX 4080',
    specs: '+i7 12700f+DDR4 32Gb',
    price: 149990,
    oldPrice: 175500,
    image: 'https://cdn.poehali.dev/files/06bb7d19-975d-4a5b-98f2-2411ffe9bc6c.png',
    badge: 'ХИТ!'
  }
];

const Catalog = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 8;

  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newProducts = products.slice(startIndex, endIndex);
      
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedProducts(prev => [...prev, ...newProducts]);
        setPage(prev => prev + 1);
      }
      
      setLoading(false);
    }, 500);
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMoreProducts();
  }, [loadMoreProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
        return;
      }
      loadMoreProducts();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts, loading]);

  return (
    <section id="catalog" className="py-16 bg-black text-white" data-section="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">COMPUTERS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 relative">
              {product.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-1">
                  {product.badge}
                </Badge>
              )}
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-orange-400 text-sm mb-4">{product.specs}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">{product.price.toLocaleString()} р.</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{product.oldPrice.toLocaleString()} р.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-400">Загружаем больше товаров...</p>
          </div>
        )}
        
        {!hasMore && displayedProducts.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">Все товары загружены</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;