import React from 'react';
import { withRouter } from 'react-router-dom';
import Loading from '../ui/loading';
import PokemonDetailView from './pokemon_detail_view';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.pokemonDetail = this.pokemonDetail.bind(this);
  }

  fetchPokemon() {
    this.props.requestPokemon(this.props.pokeId)
      .fail((err) => {
        this.props.history.push('/404');
    });
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.pokeId) {
      this.fetchPokemon();
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
        pokeId={this.props.pokeId}
        errors={this.props.errors}
        updatePokemon={this.props.updatePokemon}
        clearPokemonErrors={this.props.clearPokemonErrors} />
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