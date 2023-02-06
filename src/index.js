import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfigureStore from "./redux/reducers/ConfigureStore";
import { Provider } from "react-redux";
import "alertifyjs/build/css/alertify.min.css";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
