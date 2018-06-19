import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const merge = combineReducers(reducers);
const store = createStore(merge, applyMiddleware(thunk));

export default store;
