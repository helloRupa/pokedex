import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

const itemStyle = {
  width: '35px',
  display: 'inline-block',
};

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

  items() {
    return this.props.items.map((item) => {
      const url = `/pokemon/${this.pokeId}/item/${item.id}`;

      return (
        <Link to={url} key={item.id}>
          <img src={item.image_url} style={itemStyle}></img>
        </Link>
      );
    });
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

        <h2>Items</h2>
        <div>{this.items()}</div>

        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }
};

export default withRouter(PokemonDetail);