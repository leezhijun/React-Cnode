import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routeConfig";
// import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import appSaga from "./sagas";
import { Provider } from "react-redux";
import './app.scss'
const sagaMiddleware = createSagaMiddleware();

let store = null
if (process.env.NODE_ENV === "development") {
  store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
} else {
  store = createStore(appReducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
