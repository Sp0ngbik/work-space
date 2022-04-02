import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./pages/ReduxPractice/redux/rootReducer";
import thunk from "redux-thunk";
import { spamWordsMiddleware } from "./pages/ReduxPractice/redux/midleware";
import { sagaWatcher } from "./pages/ReduxPractice/redux/sagas";
const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
