import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => {
  const url = `/pokemon/${poke.id}`;

  return (
    <li>
      <NavLink to={url} activeClassName="active">
        <span>{poke.id}</span>
        <div>
          <img src={poke.image_url}></img>
        </div>
        { poke.name }
      </NavLink>
    </li>
  );
};

export default PokemonIndexItem;