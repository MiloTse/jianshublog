import { createStore, compose, applyMiddleware } from 'redux';
import reducer from "./reducer";
import { Map } from 'immutable';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = Map();
const store = createStore(
    reducer, 
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
