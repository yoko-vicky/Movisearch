import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';
import setDataToStore from './helpers/setDataToStore';

const store = configureStore();

store.subscribe(() => {
  const { filters } = store.getState();
  if (filters.title) { setDataToStore(filters.title, store); }
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
