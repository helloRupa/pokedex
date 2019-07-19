import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemLinks = ({ items, pokeId }) => {
  return items.map((item) => {
    const url = `/pokemon/${pokeId}/item/${item.id}`;

    return (
      <NavLink to={url} key={item.id} activeClassName="active">
        <img src={item.image_url}></img>
      </NavLink>
    );
  });
};

export default ItemLinks;
