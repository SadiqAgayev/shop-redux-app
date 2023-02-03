import { combineReducers } from "redux";
import ChangeCategoryReducer from "./ChangeCategoryReducer";
import CategoryListReducer from "./CategoryListReducer";
import ProductListReducer from "./ProductListReducer";

const rootReducer = combineReducers({
  ChangeCategoryReducer,
  CategoryListReducer,
  ProductListReducer,
});

export default rootReducer;

