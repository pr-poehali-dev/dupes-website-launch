interface ProductSpecificationsProps {
  product: {
    name: string;
  };
}

const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
  const getMaterial = () => {
    if (product.name.includes('Худи')) {
      return '80% хлопок, 20% полиэстер';
    } else if (product.name.includes('Ветровка')) {
      return '100% полиэстер';
    } else if (product.name.includes('Nike')) {
      return 'Натуральная кожа';
    } else if (product.name.includes('Gel Kahana 8')) {
      return 'Сетчатый материал, резиновая подошва';
    } else if (product.name.includes('Munchen')) {
      return 'Замша, резиновая подошва';
    } else if (product.name.includes('Crocs')) {
      return 'Croslite (запатентованная пена)';
    } else if (product.name.includes('Gel Rocket 10')) {
      return 'Синтетика, сетчатые вставки';
    } else if (product.name.includes('Gel Preleus')) {
      return 'Синтетика, текстиль, резиновая подошва';
    } else if (product.name.includes('Handball Spezial')) {
      return 'Замша, резиновая подошва';
    } else if (product.name.includes('Gel Nyc')) {
      return 'Сетчатый материал, замша, резиновая подошва';
    } else if (product.name.includes('Gel Kahana 8 черные')) {
      return 'Сетчатый материал, синтетика, резиновая подошва';
    } else if (product.name.includes('New Balance 530')) {
      return 'Сетчатый материал, синтетическая кожа';
    } else if (product.name.includes('Nike P-6000')) {
      return 'Текстиль, синтетика, резиновая подошва';
    } else if (product.name.includes('Crocs белые')) {
      return 'Croslite (запатентованная пена)';
    } else if (product.name.includes('Asics')) {
      return 'Синтетика, текстиль';
    } else {
      return '100% хлопок';
    }
  };

  const getColor = () => {
    if (product.name.includes('black')) {
      return 'Черный';
    } else if (product.name.includes('white')) {
      return 'Белый';
    } else if (product.name.includes('Gel Kahana 8')) {
      return 'Бежевый';
    } else if (product.name.includes('Munchen')) {
      return 'Бордовый/Черный';
    } else if (product.name.includes('Crocs')) {
      return 'Черный';
    } else if (product.name.includes('Gel Rocket 10')) {
      return 'Черный/Белый';
    } else if (product.name.includes('Gel Preleus')) {
      return 'Светло-бежевый';
    } else if (product.name.includes('Handball Spezial')) {
      return 'Черный';
    } else if (product.name.includes('Gel Nyc')) {
      return 'Серо-зеленый';
    } else if (product.name.includes('Handball Spezial синие')) {
      return 'Синий';
    } else if (product.name.includes('Handball Spezial серые')) {
      return 'Серый';
    } else if (product.name.includes('Gel Kahana 8 черные')) {
      return 'Черный';
    } else if (product.name.includes('New Balance 530')) {
      return 'Белый';
    } else if (product.name.includes('Nike P-6000')) {
      return 'Черный';
    } else if (product.name.includes('Crocs белые')) {
      return 'Белый';
    } else if (product.name.includes('Asics')) {
      return 'Серый/Белый';
    } else if (product.name.includes('Essentials')) {
      return 'Белый';
    } else if (product.name.includes('Футболка')) {
      return 'Черный';
    } else if (product.name.includes('Ветровка')) {
      return 'Черный';
    } else {
      return 'Серый';
    }
  };

  const getBrand = () => {
    if (product.name.includes('Худи')) {
      return 'Гоша Рубчинский х Kanye West';
    } else if (product.name.includes('Ветровка')) {
      return 'Adidas Originals';
    } else if (product.name.includes('Essentials')) {
      return 'Fear Of God Essentials';
    } else if (product.name.includes('Yeezy')) {
      return 'Yeezy';
    } else if (product.name.includes('Nike')) {
      return 'Nike';
    } else if (product.name.includes('New Balance')) {
      return 'New Balance';
    } else if (product.name.includes('Munchen') || product.name.includes('Handball Spezial')) {
      return 'Adidas';
    } else if (product.name.includes('Crocs')) {
      return 'Crocs';
    } else if (product.name.includes('Asics')) {
      return 'Asics';
    } else {
      return 'ERD (Enfants Riches Déprimés)';
    }
  };

  const getFeatures = () => {
    if (product.name.includes('Худи')) {
      return 'Черные псы';
    } else if (product.name.includes('Ветровка')) {
      return 'Белые полоски, логотип trefoil';
    } else if (product.name.includes('Essentials')) {
      return 'Минималистичный логотип';
    } else if (product.name.includes('Yeezy')) {
      return 'Bully graphic art';
    } else if (product.name.includes('Nike')) {
      return 'Air амортизация';
    } else if (product.name.includes('Gel Kahana 8')) {
      return 'Gel амортизация, дышащая сетка';
    } else if (product.name.includes('Munchen')) {
      return 'Винтажный дизайн, три полоски';
    } else if (product.name.includes('Handball Spezial')) {
      return 'Винтажный дизайн, замшевый верх';
    } else if (product.name.includes('Crocs')) {
      return 'Легкость, водостойкость';
    } else if (product.name.includes('Gel Rocket 10')) {
      return 'Gel амортизация, поддержка стопы';
    } else if (product.name.includes('Gel Preleus')) {
      return 'Gel амортизация, современный дизайн';
    } else if (product.name.includes('Gel Nyc')) {
      return 'Gel амортизация, футуристичный дизайн';
    } else if (product.name.includes('Gel Kahana 8 черные')) {
      return 'Gel амортизация, дышащая сетка';
    } else if (product.name.includes('New Balance 530')) {
      return 'ABZORB амортизация, ретро-дизайн';
    } else if (product.name.includes('Nike P-6000')) {
      return 'Air амортизация, современный дизайн';
    } else if (product.name.includes('Crocs белые')) {
      return 'Легкость, водостойкость';
    } else if (product.name.includes('Asics')) {
      return 'Gel амортизация';
    } else {
      return 'Chinese art design';
    }
  };

  const getFeatureLabel = () => {
    if (product.name.includes('Худи')) {
      return 'Принт:';
    } else if (product.name.includes('Ветровка')) {
      return 'Особенности:';
    } else if (product.name.includes('Кроссовки') || product.name.includes('Adidas')) {
      return 'Технология:';
    } else {
      return 'Принт:';
    }
  };

  const getBrandLabel = () => {
    return product.name.includes('Худи') ? 'Коллекция:' : 'Бренд:';
  };

  return (
    <div className="space-y-3">
      <h3 className="font-montserrat font-semibold text-lg text-slate">
        Характеристики
      </h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Материал:</span>
          <span>{getMaterial()}</span>
        </div>
        <div className="flex justify-between">
          <span>Цвет:</span>
          <span>{getColor()}</span>
        </div>
        <div className="flex justify-between">
          <span>{getBrandLabel()}</span>
          <span>{getBrand()}</span>
        </div>
        <div className="flex justify-between">
          <span>{getFeatureLabel()}</span>
          <span>{getFeatures()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;