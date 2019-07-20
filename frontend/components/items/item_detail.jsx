import React from 'react';
import Errors from '../ui/errors';

const ItemDetail = ({ item, errors, deleteItem, history }) => {
  item = item || { name: 'Bad Link: Item Does Not Exist', happiness: 0, price: 1000000, pokemon_id: -1 };

  const destroyItem = () => {
    history.push(`/pokemon/${item.pokemon_id}`);
    deleteItem(item.id);
  };

  const trash = () => {
    if (item.pokemon_id > -1) {
      return (
        <button className="delete-item" onClick={destroyItem}>
          <i className="fas fa-trash-alt"></i>
        </button>
      )
    }
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>

      {trash()}

      <Errors errors={errors} />
      
      <p>Happiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetail;
