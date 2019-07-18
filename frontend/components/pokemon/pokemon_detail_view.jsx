import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Link, Route } from 'react-router-dom';

const PokemonDetailView = ({details, items, pokeId}) => {
  const itemsLinks = () => {
    return items.map((item) => {
      const url = `/pokemon/${pokeId}/item/${item.id}`;

      return (
        <Link to={url} key={item.id}>
          <img src={item.image_url}></img>
        </Link>
      );
    });
  };

  const showItem = () => {
    if (items.length > 0) {
      return <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
    }
  };

  return (
    <div className="poke-detail">
      <img src={details.image_url} className="main-img"></img>
      <h1>{details.name}</h1>
      <p>Type: {details.poke_type}</p>
      <p>Attack: {details.attack}</p>
      <p>Defense: {details.defense}</p>
      <p>Moves: {details.moves ? details.moves.join(', ') : ''}</p>
  
      <div className="item">
        <h2>Items</h2>
        <div>{itemsLinks()}</div>
        {showItem()}
      </div>
      <Link to={`/pokemon/${pokeId}/item`}>
        Add Item
      </Link>
    </div>
  );
};

export default PokemonDetailView;