import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import ProductModal from './ProductModal';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const hoodieProduct = {
    id: 1,
    name: "Худи Гоша Рубчинский х Kanye West Черные псы",
    price: "3100₽",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeNumbers: ["1", "2", "3", "4", "5"],
    image: "https://cdn.poehali.dev/files/0172d86e-1da4-4342-b907-62729b281c29.jpeg",
    isNew: true,
    discount: null
  };

  const windbreakerProduct = {
    id: 2,
    name: "Ветровки Adidas",
    price: "2800₽",
    sizes: ["S", "M", "L", "XL"],
    sizeNumbers: ["1", "2", "3", "4"],
    image: "https://cdn.poehali.dev/files/3255da10-b129-4257-931c-aeeed12f399e.jpeg",
    isNew: false,
    discount: null
  };

  const tshirtProduct = {
    id: 3,
    name: "Футболка ERD Chinese enfants riches deprimes",
    price: "2200₽",
    sizes: ["S", "M", "L", "XL"],
    sizeNumbers: ["1", "2", "3", "4"],
    image: "https://cdn.poehali.dev/files/4f43107a-2067-42ff-8c69-1d4971646dca.jpeg",
    isNew: false,
    discount: null
  };

  const longsleeveProducts = [
    {
      id: 4,
      name: "Лонгслив Essentials Fear Of God",
      price: "2900₽",
      sizes: ["M", "L"],
      sizeNumbers: ["2", "3"],
      image: "https://cdn.poehali.dev/files/ae753281-4873-45e2-95bc-0da68de6851b.jpeg",
      isNew: false,
      discount: null
    },
    {
      id: 5,
      name: "Yeezy Bully longsleeve",
      price: "2900₽",
      sizes: ["S", "M", "L"],
      sizeNumbers: ["1", "2", "3"],
      image: "https://cdn.poehali.dev/files/f40ea812-995a-46d2-887b-acd99d98cffc.jpeg",
      isNew: false,
      discount: null
    }
  ];