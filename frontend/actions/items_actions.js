import * as APIUtil from '../util/api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';
export const CLEAR_ITEM_ERRORS = 'CLEAR_ITEM_ERRORS';

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveItemErrors = (errors) => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

export const clearItemErrors = () => ({
  type: CLEAR_ITEM_ERRORS,
  errors: []
});

export const createItem = (data) => (dispatch) => (
  APIUtil.createItem(data)
    .then(
      (item) => {
        dispatch(receiveItem(item));
        return item;
      },
      (errors) => {
        dispatch(receiveItemErrors(errors.responseJSON));
      }
    )
);