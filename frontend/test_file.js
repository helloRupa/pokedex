import * as APIUtil from './util/api_util';
import * as Actions from './actions/pokemon_actions';
import * as Selectors from './reducers/selectors';
import pokemonReducer from './reducers/pokemon_reducer';

window.receiveAllPokemon = Actions.receiveAllPokemon;
window.requestAllPokemon = Actions.requestAllPokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;
window.selectAllPokemon = Selectors.selectAllPokemon;

window.pokemonReducer = pokemonReducer;
window.requestPokemon = Actions.requestPokemon;