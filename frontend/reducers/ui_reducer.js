import errorsReducer from './errors_reducer';
import { RECEIVE_POKEMON_ERRORS, CLEAR_POKEMON_ERRORS } from '../actions/pokemon_actions';

const uiReducer = (state = {errors: []}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return { errors: errorsReducer(state, action) };
    case CLEAR_POKEMON_ERRORS:
      return { errors: errorsReducer(state, action) };
    default:
      return state;
  }
};

export default uiReducer;