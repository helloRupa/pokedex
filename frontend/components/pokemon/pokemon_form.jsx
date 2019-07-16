import React from 'react';
import { withRouter } from 'react-router-dom';

const types = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
];

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.update = this.update.bind(this);
    this.handleMoves = this.handleMoves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  }

  handleMoves(e) {
    this.setState({ moves: e.currentTarget.value.split(', ') });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createPokemon(this.state)
      .then((pokemon) => {
        this.props.history.push(`pokemon/${pokemon.id}`);
      });
  }

  initialState() {
    return {
      attack: '',
      defense: '',
      image_url: '',
      items_ids: [],
      moves: [],
      name: '',
      poke_type: '',
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" 
            placeholder="Name" 
            id="name" 
            value={this.state.name} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="poke_type">Type:</label>
          <select id="poke_type" value={this.state.poke_type} onChange={this.update}>
            <option disabled defaultValue value="">Select Type</option>
            {types.map((type) => <option value={type} key={type}>{type}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input type="text" 
            placeholder="Image URL" 
            id="image_url" 
            value={this.state.image_url} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="attack">Attack:</label>
          <input type="number" 
            placeholder="Attack" 
            id="attack" 
            value={this.state.attack} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="defense">Defense:</label>
          <input type="text" 
            placeholder="Defense" 
            id="defense" 
            value={this.state.defense} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="moves">Moves:</label>
          <input type="text" 
            placeholder="Comma-separated list of moves" 
            id="moves" 
            value={this.state.moves.join(', ')} 
            onChange={this.handleMoves}>
          </input>
        </div>

        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    );
  }
};

export default withRouter(PokemonForm);
