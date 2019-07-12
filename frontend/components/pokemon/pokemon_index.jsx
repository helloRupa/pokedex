import React from 'react';

const thumbStyle = {
  height: '35px',
};

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        { this.props.pokemon.map((poke, idx) => 
          <li key={idx}>
            { poke.name }
            <img src={poke.image_url} style={thumbStyle}></img>
          </li>
        ) }
      </ul>
    );
  }
}