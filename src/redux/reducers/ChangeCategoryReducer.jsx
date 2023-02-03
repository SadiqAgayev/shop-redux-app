import * as ActionTypes from "./../actions/ActionTypes";
import initialState from "./InitialState";

export default function ChangeCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
