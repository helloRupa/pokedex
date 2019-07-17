import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => {
  const url = `/pokemon/${poke.id}`;

  return (
    <li>
      <Link to={url}>
        <span>{poke.id}</span>
        <div>
          <img src={poke.image_url}></img>
        </div>
        { poke.name }
      </Link>
    </li>
  );
};

export default PokemonIndexItem;