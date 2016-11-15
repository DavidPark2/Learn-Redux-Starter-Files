import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { broswerHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
// this is the same as const defaultState = {
//   posts: posts,
//   comments: comments
// }
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
