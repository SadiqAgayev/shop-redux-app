import * as ActionTypes from "./../actions/ActionTypes";
import initialState from "./InitialState";

export default function CartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      let addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case ActionTypes.REMOVE_FROM_CART:
      let newState2 = state.filter(
        (productItem) => productItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
}
