import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer, AuthReducer });

let middleware = [thunk]

const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

export { store };
