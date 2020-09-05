import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const persistedState = localStorage.getItem('theme')
  ? { theme: JSON.parse(localStorage.getItem('theme')) }
  : { theme: { color: 'light', typography: 'normal' } };

export default function StoreProvider({ children }) {
  const store = createStore(reducers, persistedState);

  store.subscribe(() => {
    localStorage.setItem('theme', JSON.stringify(store.getState().theme));
  });

  return <Provider store={store}>{children}</Provider>;
}
