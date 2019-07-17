import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from '../pokemon/pokemon_index';

const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state),
  loading: state.ui.loading.all
});

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);