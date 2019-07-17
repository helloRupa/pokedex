import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import singlePokemonReducer from './single_pokemon_reducer';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  singlePokemon: singlePokemonReducer,
  items: itemsReducer
});

export default entitiesReducer;