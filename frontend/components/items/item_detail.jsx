import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemDetail = ({ item, errors, deleteItem, history }) => {
  item = item || { name: 'Bad Link: Item Does Not Exist', happiness: 0, price: 1000000, pokemon_id: -1 };

  const displayErrors = () => {
    return errors.join(' | ');
  };

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
      {displayErrors()}
      <p>Happiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default withRouter(ItemDetail);