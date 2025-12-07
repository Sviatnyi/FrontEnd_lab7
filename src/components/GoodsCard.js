import React from 'react';

// Компонент картки товару, який приймає дані через props 
function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Ціна: <b>{props.price} грн</b></p>
    </div>
  );
}

export default GoodsCard;