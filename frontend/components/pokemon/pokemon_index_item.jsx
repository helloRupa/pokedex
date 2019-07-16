import React from 'react';
import { Link } from 'react-router-dom';

const thumbStyle = {
  height: '35px',
};

const PokemonIndexItem = ({ poke }) => {
  const url = `/pokemon/${poke.id}`;

  return (
    <li>
      <Link to={url}>
        { poke.name }
        <img src={poke.image_url} style={thumbStyle}></img>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;