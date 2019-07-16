import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.setPokeId();
  }

  setPokeId() {
    this.pokeId = this.props.match.params.pokemonId;
  }

  componentDidMount() {
    this.setPokeId();
    this.props.requestPokemon(this.pokeId);
  }

  componentDidUpdate(prevProps) {
    this.setPokeId();

    if (prevProps.match.params.pokemonId !== this.pokeId) {
      this.props.requestPokemon(this.pokeId);
    }
  }

  render() {
    const details = this.props.pokemon[this.pokeId];

    return (
      <div>
        <img src={details.image_url}></img>
        <h1>{details.name}</h1>
        <div>Type: {details.poke_type}</div>
        <div>Attack: {details.attack}</div>
        <div>Defense: {details.defense}</div>
        <div>Moves: {details.moves ? details.moves.join(', ') : ''}</div>
      </div>
    );
  }
};

export default withRouter(PokemonDetail);