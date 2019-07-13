import React from 'react';
import { Link } from 'react-router-dom';

const thumbStyle = {
  height: '35px',
};

const PokemonIndexItem = ({ poke }) => {
  return (
    <li>
      <Link to="/pokemon/:pokemonId">
        { poke.name }
        <img src={poke.image_url} style={thumbStyle}></img>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;