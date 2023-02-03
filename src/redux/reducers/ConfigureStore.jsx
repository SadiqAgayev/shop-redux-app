import { createStore } from "redux";
import rootReducer from ".";

export default function ConfigureStore() {
  return createStore(rootReducer);
}
