import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon, updatePokemon, clearPokemonErrors } from '../../actions/pokemon_actions';
import { selectPokemonItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.singlePokemon,
  items: selectPokemonItems(state, parseInt(ownProps.match.params.pokemonId)),
  pokeId: ownProps.match.params.pokemonId,
  loading: state.ui.loading.single,
  errors: state.ui.errors,
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
  updatePokemon: (data, id) => dispatch(updatePokemon(data, id)),
  clearPokemonErrors: () => dispatch(clearPokemonErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);