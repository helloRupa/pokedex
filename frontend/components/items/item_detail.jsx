import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <div>Happiness: {item.happiness}</div>
      <div>Price: ${item.price}</div>
    </div>
  );
};

export default ItemDetail;