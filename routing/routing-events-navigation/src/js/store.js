import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import * as reducers from './reducers';

export function configureStore(initialState) {

  const reducer = combineReducers({
    ...reducers
  });

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware, promiseMiddleware)
  );

  return store
}
