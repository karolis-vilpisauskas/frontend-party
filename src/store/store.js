import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";
import rootReducer from "./reducers";
import { loadState, saveState } from "./sessionStorage";

// Load session storage
const persistedState = loadState();

const middleware = [thunk];

// DevTools init
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, persistedState, enhancer);

// Save to session storage
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
