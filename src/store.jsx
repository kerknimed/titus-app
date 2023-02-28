import expenseReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

export default createStore(
  expenseReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);