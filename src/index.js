import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfigureStore from "./redux/reducers/ConfigureStore";
import { Provider } from "react-redux";
import 'alertifyjs/build/css/alertify.min.css'

const store = ConfigureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
