import React from 'react';
import { Link } from 'react-router-dom';

const ItemLinks = ({ items, pokeId }) => {
  return items.map((item) => {
    const url = `/pokemon/${pokeId}/item/${item.id}`;

    return (
      <Link to={url} key={item.id}>
        <img src={item.image_url}></img>
      </Link>
    );
  });
};

export default ItemLinks;
