import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <section className="pokedex">
        <ul>
          { this.props.pokemon.map((poke) => 
            <PokemonIndexItem poke={poke} key={poke.id} />
          ) }
        </ul>
      </section>
    );
  }
}