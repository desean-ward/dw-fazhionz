import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// Custom logger middleware
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middlewares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
].filter(Boolean);

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "runction") {
  }
};

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(loggerMiddleware);
// }

export const store = createStore(rootReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

export default store;
