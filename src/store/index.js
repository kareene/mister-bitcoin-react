import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ContactReducer from './reducers/ContactReducer';
import UserReducer from './reducers/UserReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    contact: ContactReducer,
    user: UserReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store