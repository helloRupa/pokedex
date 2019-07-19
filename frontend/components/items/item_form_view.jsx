import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const items = ['pokemon_berry', 'pokemon_egg', 'pokemon_potion', 'pokemon_super_potion'];
const path = '/assets/';
const filetype = '.svg';

class ItemFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.imageRadioButtons = this.imageRadioButtons.bind(this);
    this.props.clearItemErrors();
  }

  initialState() {
    return {
      name: '',
      pokemon_id: this.props.pokemon.id,
      happiness: '',
      price: '',
      image_url: '',
    };
  }

  update(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createItem(this.state)
      .then(
        (item) => {this.props.history.push(`item/${item.id}`);}
      );
  }

  imageRadioButtons() {
    return items.map((item) => {
      const url = `${path}${item}${filetype}`;

      return (
        <div key={item} className="item-images">
          <input type="radio" name="image_url" value={url} id={item} onClick={this.update}></input>
          <label htmlFor={item}><img src={url} title={item}></img></label>
        </div>
      );
    });
  }

  displayErrors() {
    return this.props.errors.join(' | ');
  }

  render() {
    const { image_url, name, id } = this.props.pokemon;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="poke-header">
          <Link to={`/pokemon/${id}`}><img src={image_url}></img></Link>
          <h1>{name}</h1>
        </div>

        {this.displayErrors()}

        <div className="imgUrl">
          <label>Choose Image:</label>
          <div className="radio">
            {this.imageRadioButtons()}
          </div>
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" 
            placeholder="Name" 
            name="name" 
            value={this.state.name} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" 
            placeholder="Price" 
            name="price" 
            value={this.state.price} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <label htmlFor="happiness">Happiness:</label>
          <input type="number" 
            placeholder="Happiness" 
            name="happiness" 
            value={this.state.happiness} 
            onChange={this.update}>
          </input>
        </div>

        <div>
          <input type="submit" value="Create Item"></input>
        </div>
      </form>
    )
  }
};

export default withRouter(ItemFormView);
