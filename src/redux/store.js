import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

export default store;
