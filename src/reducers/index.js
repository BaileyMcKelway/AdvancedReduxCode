import { createStore, combineReducers, applyMiddleware } from 'redux';
import commentsReducer from './comments';
import reduxPromise from 'redux-promise';
import authReducer from './auth';

const reducers = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(reduxPromise));
export default store;
