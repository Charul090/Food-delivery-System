import userReducer from "./user/reducer.js";
import restoReducer from "./restaurant/reducer.js"
import {createStore,compose,combineReducers} from "redux";

const reducers=combineReducers({user:userReducer,restaurant:restoReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducers,composeEnhancers())

export {store}