import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./components/app/app";
import { Provider } from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./services/reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store: any = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
