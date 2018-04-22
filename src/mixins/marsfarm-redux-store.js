import { createStore, compose, applyMiddleware } from "redux";
import PolymerRedux from "./marsfarm-polymer-redux.js";
import dataService from "./marsfarm-data-service.js";

const initialState = {
  message: "Hello from redux!",
  temperatures: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TEMPERATURES_RECEIVED":
      return Object.assign({}, state, { temperatures: action.data });
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(dataService))
);
const ReduxMixin = PolymerRedux(store);

export default ReduxMixin;
