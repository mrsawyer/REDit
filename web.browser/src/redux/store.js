import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { SortPosts, UpVotes } from './reducer';

export default createStore(
  combineReducers({
    data: SortPosts,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxLogger)
);
