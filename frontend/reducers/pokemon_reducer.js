import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      let stateCopy = merge({}, state);

      stateCopy[action.pokemon.id] = action.pokemon;
      return stateCopy;
    default:
      return state;
  }
};

export default pokemonReducer;
