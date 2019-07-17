import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import Loading from '../ui/loading';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.pokemonIndex = this.pokemonIndex.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPokemon()
      .then(() => { this.props.setIndexReady(true) });
  }

  pokemonIndex() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <ul>
          { this.props.pokemon.map((poke) => 
            <PokemonIndexItem poke={poke} key={poke.id} />
          ) }
        </ul>
      );
    }
  }

  render() {
    return (
      <section className="pokedex">
        {this.pokemonIndex()}
      </section>
    );
  }
}
