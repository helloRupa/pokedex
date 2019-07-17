import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItems, selectPokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, ownProps.match.params.pokemonId),
  items: selectPokemonItems(state, parseInt(ownProps.match.params.pokemonId)),
  pokeId: ownProps.match.params.pokemonId,
  loading: state.ui.loading.single,
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);