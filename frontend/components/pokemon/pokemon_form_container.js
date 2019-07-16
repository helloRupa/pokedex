import { connect } from 'react-redux';
import { createPokemon, clearPokemonErrors } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapStateToProps = (state) => ({
  errors: state.ui.errors,
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (data) => dispatch(createPokemon(data)),
  clearPokemonErrors: () => dispatch(clearPokemonErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);