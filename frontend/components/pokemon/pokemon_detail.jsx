import React from 'react';
import { withRouter } from 'react-router-dom';
import Loading from '../ui/loading';
import PokemonDetailView from './pokemon_detail_view';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.pokemonDetail = this.pokemonDetail.bind(this);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.pokeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.pokeId) {
      this.props.requestPokemon(this.props.pokeId);
    }
  }

  pokemonDetail() {
    if (this.props.loading) {
      return <Loading />
    }

    return (
      <PokemonDetailView 
        details={this.props.pokemon} 
        items={this.props.items} 
        pokeId={this.props.pokeId} />
    );
  }

  render() {
    return (
      <div>
        {this.pokemonDetail()}
      </div>
    );
  }
};

export default withRouter(PokemonDetail);