import * as APIUtil from '../util/api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item
});

export const createItem = (data) => (dispatch) => (
  APIUtil.createItem(data)
    .then(
      (item) => {
        dispatch(receiveItem(item));
        return item;
      }
    )
);