export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  images: string[];
  thumbnails: string[];
  availableSizes: { size: string; count: number }[];
  specifications: {
    material: string;
    color: string;
    brand: string;
    print?: string;
    features?: string;
  };
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Лонгслив Essentials Fear Of God",
    price: "2900₽",
    description: "Лаконичный лонгслив из коллекции Essentials Fear Of God. Белая модель с минималистичным логотипом бренда. Высококачественный хлопок, комфортная посадка. Идеальный базовый элемент гардероба для ценителей премиальной уличной моды.",
    images: [
      "https://cdn.poehali.dev/files/f899cd3b-25f3-4625-9ff1-bc57c543bb91.png"
    ],
    thumbnails: [
      "https://cdn.poehali.dev/files/f899cd3b-25f3-4625-9ff1-bc57c543bb91.png"
    ],
    availableSizes: [
      { size: "M", count: 2 },
      { size: "L", count: 1 }
    ],
    specifications: {
      material: "100% хлопок",
      color: "Белый",
      brand: "Fear Of God Essentials",
      print: "Минималистичный логотип"
    },
    category: "longsleeve"
  },
  {
    id: 2,
    name: "Yeezy Bully longsleeve",
    price: "2900₽",
    description: "Эксклюзивный лонгслив Yeezy Bully с провокационным принтом. Белая модель с контрастным черно-белым изображением. Высококачественный хлопок, комфортная посадка. Идеальный выбор для любителей уличной моды и коллекционеров Yeezy.",
    images: [
      "https://cdn.poehali.dev/files/d67f251b-c295-40fa-9af2-bed089f3a007.png"
    ],
    thumbnails: [
      "https://cdn.poehali.dev/files/d67f251b-c295-40fa-9af2-bed089f3a007.png"
    ],
    availableSizes: [
      { size: "S", count: 1 }
    ],
    specifications: {
      material: "100% хлопок",
      color: "Серый",
      brand: "Yeezy",
      print: "Bully graphic art"
    },
    category: "longsleeve"
  },
  {
    id: 3,
    name: "Ветровка Adidas Originals",
    price: "2800₽",
    description: "Стильная черная ветровка Adidas Originals с контрастными белыми полосками на рукавах. Легкая и функциональная модель с фирменным логотипом trefoil. Отличная защита от ветра, идеальна для спорта и повседневной носки.",
    images: [
      "https://cdn.poehali.dev/files/4b542fa4-b559-4bf6-88ec-a47694a8744d.png"
    ],
    thumbnails: [
      "https://cdn.poehali.dev/files/4b542fa4-b559-4bf6-88ec-a47694a8744d.png"
    ],
    availableSizes: [
      { size: "S", count: 3 },
      { size: "M", count: 2 },
      { size: "L", count: 4 },
      { size: "XL", count: 2 },
      { size: "XXL", count: 1 }
    ],
    specifications: {
      material: "100% полиэстер",
      color: "Черный",
      brand: "Adidas Originals",
      features: "Белые полоски, логотип trefoil"
    },
    category: "jacket"
  }
];