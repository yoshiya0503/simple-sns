/**
 * @fileoverview Store
 * @name store.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { ErrorDialog } from './middlewares';


export const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    routerMiddleware(hashHistory),
    ErrorDialog,
    createLogger(),
  ),
);

export const history = syncHistoryWithStore(hashHistory, store);
