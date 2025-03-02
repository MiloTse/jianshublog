import { createStore, compose } from 'redux';
import reducer from "./reducer";
import { Map } from 'immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = Map();
const store = createStore(
    reducer, 
    initialState,
    composeEnhancers()
);

export default store;
