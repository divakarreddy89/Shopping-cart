import { EDIT_ITEM, REMOVE_ITEM } from "./action-types/cart-actions";

//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: { id }
  };
};

//edit item action
export const editItem = payload => {
  return {
    type: EDIT_ITEM,
    payload
  };
};
