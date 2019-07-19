import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemDetail = ({ item, errors, deleteItem, history }) => {
  const displayErrors = () => {
    return errors.join(' | ');
  };

  const destroyItem = () => {
    history.push(`/pokemon/${item.pokemon_id}`);
    deleteItem(item.id);
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <button className="delete-item" onClick={destroyItem}><i className="fas fa-trash-alt"></i></button>
      {displayErrors()}
      <p>Happiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default withRouter(ItemDetail);