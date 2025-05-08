import {legacy_createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
const rootreducer = combineReducers({
    UserReducer
});

const store = legacy_createStore(rootreducer,applyMiddleware(thunk));
export default store;