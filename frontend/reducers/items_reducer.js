import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from '../actions/items_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_ITEMS:
      Object.keys(action.items).forEach((id) => {
        stateCopy[id] = action.items[id];
      });

      return stateCopy;
    case RECEIVE_ITEM:
      stateCopy[action.item.id] = action.item;
      
      return stateCopy;
    case REMOVE_ITEM:
      delete stateCopy[action.id];

      return stateCopy;
    default:
      return state;
  }
};

export default itemsReducer;