import * as ActionTypes from "./../actions/ActionTypes";

export function addToCart(productItem) {
  return { type: ActionTypes.ADD_TO_CART, payload: productItem };
}
