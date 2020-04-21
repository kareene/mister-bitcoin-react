import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ContactReducer from './reducers/ContactReducer';

const store = createStore(combineReducers({
    contact: ContactReducer
}), applyMiddleware(thunk));

export default store