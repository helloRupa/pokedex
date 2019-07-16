import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon,
  items: selectPokemonItems(state, parseInt(ownProps.match.params.pokemonId)),
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);