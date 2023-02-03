import * as ActionTypes from "./../actions/ActionTypes";
import initialState from "./InitialState";

export default function ProductListReducer(state = initialState.products,action) {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
