import * as ActionTypes from "./../actions/ActionTypes";
import initialState from "./InitialState";

export default function CategoryListReducer(state = initialState.categories,action) {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
