import { createStore, combineReducers } from "redux";
import logsReducer from "../reducers/logs";
import filtersReducer from "../reducers/filters";
import profileReducer from "../reducers/profile";

export default () => {
  const store = createStore(
    combineReducers({
      logs: logsReducer,
      filters: filtersReducer,
      profile: profileReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

// store creation

// combinereducer gör "variabler" för reducers. Gör så vi kan bygga mer komplexa stores. value = reducer

