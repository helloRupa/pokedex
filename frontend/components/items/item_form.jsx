import React from 'react';
import Loading from '../ui/loading';
import ItemFormView from './item_form_view';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.itemForm = this.itemForm.bind(this);
  }

  itemForm() {
    if (this.props.loading) {
      return <Loading />;
    }

    return <ItemFormView pokemon={this.props.pokemon} createItem={this.props.createItem} />;
  }

  render() {
    return (
      <section className="item-form">
        {this.itemForm()}
      </section>
    );
  }
};
