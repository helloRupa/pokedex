import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>Happiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetail;