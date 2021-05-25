import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
