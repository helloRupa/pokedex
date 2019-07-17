import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

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
          <img src={item.image_url}></img>
        </Link>
      );
    });
  }

  showItem() {
    if (this.props.items.length > 0) {
      return <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
    }
  }

  render() {
    const details = this.props.pokemon;

    return (
      <div className="poke-detail">
        <img src={details.image_url} className="main-img"></img>
        <h1>{details.name}</h1>
        <p>Type: {details.poke_type}</p>
        <p>Attack: {details.attack}</p>
        <p>Defense: {details.defense}</p>
        <p>Moves: {details.moves ? details.moves.join(', ') : ''}</p>

        <div className="item">
          <h2>Items</h2>
          <div>{this.items()}</div>
          {this.showItem()}
        </div>
      </div>
    );
  }
};

export default withRouter(PokemonDetail);