import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
  // Дані для товарів (Завдання 2)
  const goods = [
    { id: 1, name: 'Apple', price: 20, image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
    { id: 2, name: 'Pear', price: 30, image: 'https://cdn-icons-png.flaticon.com/512/415/415767.png' },
    { id: 3, name: 'Soda', price: 50, image: 'https://cdn-icons-png.flaticon.com/512/415/415750.png' },
    { id: 4, name: 'Banana', price: 40, image: 'https://cdn-icons-png.flaticon.com/512/415/415761.png' },
    { id: 5, name: 'Loli-pop', price: 25, image: 'https://cdn-icons-png.flaticon.com/512/415/415736.png' },
    { id: 6, name: 'Strawberry', price: 35, image: 'https://cdn-icons-png.flaticon.com/512/415/415740.png' },
  ];

  return (
    <div className="App">
      {/* Завдання 1 */}
      <Header 
        title="Святний Тимофій Андрійович, група ІО-34"
        birthInfo="18 січня 2005 року, м. Київ"
        educationSchool="СЗШ №36 імені С. П. Корольова"
        educationUni="НТУУ «КПІ ім. Ігоря Сікорського»"
      />
      
      <Content />
      
      <Image />

      <hr style={{margin: '50px 0'}}/>

      {/* Завдання 2: Галерея */}
      <h2 style={{textAlign: 'center'}}>Галерея товарів</h2>
      <div className="goods-gallery">
        {goods.map(item => (
          <GoodsCard 
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;