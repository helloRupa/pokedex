import React from 'react';
import PokemonItems from './pokemon_items';

class PokemonDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.props.clearPokemonErrors();
    this.state = this.initialState();
    this.showMoves = this.showMoves.bind(this);
    this.handleMoves = this.handleMoves.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.update = this.update.bind(this);
    this.showNumberData = this.showNumberData.bind(this);
  }

  initialState() {
    const details = this.props.details;

    return {
      attack: details.attack,
      defense: details.defense,
      moves: details.moves,
      attackEdit: false,
      defenseEdit: false,
      movesEdit: false,
    };
  }

  handleEditClick(prop) {
    this.setState({ [prop + 'Edit']: true });
  }

  handleCancelClick(prop) {
    this.setState({ [prop + 'Edit']: false, [prop]: this.props.details[prop] },
      () => {
        if (!this.isEditing()) {
          this.props.clearPokemonErrors();
        }
      }
    );
  }

  update(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  cancelBtn(prop) {
    return (
      <button className="cancel" title="Cancel" onClick={() => { this.handleCancelClick(prop) }}>
        X
      </button>
    );
  }

  editGroup(title, value, prop) {
    return (
      <div className="edit-group">
        <p>{title}: {value}</p>
        <button 
          title="edit" 
          className="edit" 
          onClick={() => { this.handleEditClick(prop) }}><i className="fas fa-edit"></i></button>
      </div>
    );
  }

  showNumberData(title, prop) {
    if (this.state[prop + 'Edit']) {
      return (
        <p>
          <label htmlFor={prop}>{title}:</label>
          <input type="number" 
            id={prop} 
            name={prop}
            value={this.state[prop]} 
            onChange={this.update}>
          </input>

          {this.cancelBtn(prop)}
        </p>
      );
    }

    return (
      <div>{this.editGroup(title, this.state[prop] || this.props.details[prop], prop)}</div>
    );
  }

  handleMoves(e) {
    this.setState({ moves: e.currentTarget.value.split(', ') });
  }

  showMoves() {
    if (this.state.movesEdit) {
      return (
        <p>
          <label htmlFor="moves">Moves:</label>
          <input 
            type="text" 
            id="moves" 
            name="moves" 
            value={this.state.moves.join(', ')} 
            onChange={this.handleMoves}>
          </input>

          {this.cancelBtn('moves')}
        </p>
      );
    }

    return (
      <div>
        {this.editGroup('Moves', this.state.moves.join(', ') || 
          this.props.details.moves.join(', ') || 
          '', 'moves')}
      </div>
    );
  }

  handleSave() {
    this.props.clearPokemonErrors();

    this.props.updatePokemon(this.state, this.props.pokeId)
      .then(
        () => {
          ['attackEdit', 'defenseEdit', 'movesEdit'].forEach((prop) => {
            this.setState({ [prop]: false });
          })
        }
      );
  }

  saveButton() {
    const s = this.state;

    if (this.isEditing()) {
      return (
        <button className="save" onClick={this.handleSave}>Save Changes</button>
      );
    }
  }

  displayErrors() {
    const errors = this.props.errors;

    if (errors.length > 0 && this.isEditing()) {
      return (
        <div className="errors">{this.props.errors.join('  |  ')}</div>
      );
    }
  }

  isEditing() {
    const s = this.state;

    return [s.attackEdit, s.defenseEdit, s.movesEdit].some((val) => val === true);
  }

  render() {
    const details = this.props.details;

    return (
      <div className="poke-detail">
        <img src={details.image_url} className="main-img"></img>
        <h1>{details.name}</h1>
        {this.displayErrors()}
        <p>Type: {details.poke_type}</p>
        {this.showNumberData('Attack', 'attack')}
        {this.showNumberData('Defense', 'defense')}
        {this.showMoves()}
        {this.saveButton()}
    
        <PokemonItems items={this.props.items} pokeId={this.props.pokeId} />
      </div>
    );
  }
}

export default PokemonDetailView;