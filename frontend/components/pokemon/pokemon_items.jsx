import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import ItemLinks from '../items/item_links';
import { Link, Route } from 'react-router-dom';

const PokemonItems = ({ items, pokeId }) => {

  const showItem = () => {
    if (items.length > 0) {
      return <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
    }
  };

  return (
    <div className="item">
      <h2>Items</h2>

      <Link to={`/pokemon/${pokeId}/item`} className="add-item" title="add item">
        +
      </Link>

      <div>
        <ItemLinks items={items} pokeId={pokeId} />
      </div>

      {showItem()}
    </div>
  );
};

export default PokemonItems;
