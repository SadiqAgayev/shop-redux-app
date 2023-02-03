import * as ActionTypes from "./ActionTypes";

export function changeCategory(category) {
  return { type: ActionTypes.CHANGE_CATEGORY, payload: category };
}
