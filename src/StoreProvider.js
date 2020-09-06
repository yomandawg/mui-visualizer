import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {};

export default function StoreProvider({ children }) {
  const store = createStore(reducers, persistedState);

  store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
  });

  return <Provider store={store}>{children}</Provider>;
}
