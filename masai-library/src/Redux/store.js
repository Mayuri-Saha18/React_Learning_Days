import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AdminReducer } from "./AdminRedux/reducer"
import {reducer as DashBoardReducer} from "./DashboardRedux/reducer"
import {reducer as UserReducer} from "./UserAuth/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    AdminReducer,
    DashBoardReducer,
    UserReducer
})

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;