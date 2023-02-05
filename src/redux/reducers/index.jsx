import { combineReducers } from "redux";
import ChangeCategoryReducer from "./ChangeCategoryReducer";
import CategoryListReducer from "./CategoryListReducer";
import ProductListReducer from "./ProductListReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  ChangeCategoryReducer,
  CategoryListReducer,
  ProductListReducer,
  CartReducer,
});

export default rootReducer;
