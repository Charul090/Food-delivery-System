import userReducer from "./user/reducer.js";
import restoReducer from "./restaurant/reducer.js"
import {createStore,compose,combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"

const reducers=combineReducers({user:userReducer,restaurant:restoReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export {store}