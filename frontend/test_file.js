import * as APIUtil from './util/api_util';
import * as Actions from './actions/pokemon_actions';

window.receiveAllPokemon = Actions.receiveAllPokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;