import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectAllItems } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon,
  items: selectAllItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);