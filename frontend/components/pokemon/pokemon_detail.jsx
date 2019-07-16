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
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.pokeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.pokeId) {
      this.props.requestPokemon(this.props.pokeId);
    }
  }

  items() {
    return this.props.items.map((item) => {
      const url = `/pokemon/${this.props.pokeId}/item/${item.id}`;

      return (
        <Link to={url} key={item.id}>
          <img src={item.image_url} style={itemStyle}></img>
        </Link>
      );
    });
  }

  render() {
    const details = this.props.pokemon;

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