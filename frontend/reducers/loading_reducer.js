import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { START_LOADING_ALL_POKEMON, START_LOADING_SINGLE_POKEMON } from '../actions/loading_actions';
import merge from 'lodash/merge';

const loadingReducer = (state = {all: true, single: true}, action) => {
  switch(action.type) {
    case START_LOADING_ALL_POKEMON:
      return merge({}, state, {all: true});
    case START_LOADING_SINGLE_POKEMON:
      return merge({}, state, {single: true});
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, {all: false});
    case RECEIVE_POKEMON:
      return merge({}, state, {single: false});
    default:
      return state;
  }
};

export default loadingReducer;