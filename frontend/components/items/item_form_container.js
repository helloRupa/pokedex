import { connect } from 'react-redux';
import { createItem, clearItemErrors } from '../../actions/items_actions';
import { selectPokemon } from '../../reducers/selectors';
import ItemForm from './item_form';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, parseInt(ownProps.match.params.pokemonId)),
  loading: state.ui.loading.all,
  errors: state.ui.errors,
});

const mapDispatchToProps = (dispatch) => ({
  createItem: (data) => dispatch(createItem(data)),
  clearItemErrors: () => dispatch(clearItemErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);