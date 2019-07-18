import { connect } from 'react-redux';
import { createItem } from '../../actions/items_actions';
import { selectPokemon } from '../../reducers/selectors';
import ItemForm from './item_form';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, parseInt(ownProps.match.params.pokemonId)),
  loading: state.ui.loading.all,
});

const mapDispatchToProps = (dispatch) => ({
  createItem: (data) => dispatch(createItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);