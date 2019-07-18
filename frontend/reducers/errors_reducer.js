import { RECEIVE_POKEMON_ERRORS, CLEAR_POKEMON_ERRORS } from '../actions/pokemon_actions';
import { RECEIVE_ITEM_ERRORS, CLEAR_ITEM_ERRORS } from '../actions/items_actions';

const errorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_POKEMON_ERRORS:
    case RECEIVE_ITEM_ERRORS:
      return [...action.errors];
    case CLEAR_POKEMON_ERRORS:
    case CLEAR_ITEM_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;