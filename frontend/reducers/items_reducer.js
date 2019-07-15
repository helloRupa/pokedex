import { RECEIVE_ITEMS } from '../actions/items_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      let stateCopy = merge({}, state);

      Object.keys(action.items).forEach((id) => {
        stateCopy[id] = action.items[id];
      });

      return stateCopy;
    default:
      return state;
  }
};

export default itemsReducer;