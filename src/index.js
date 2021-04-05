import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';

import storeMoviesData from './helpers/storeMoviesData';

const store = configureStore();
store.subscribe(() => {
  const { movies, filters } = store.getState();
  // eslint-disable-next-line no-console
  console.log('MoviesStore:', movies);
  // eslint-disable-next-line no-console
  console.log('FiltersStore:', filters);
  // eslint-disable-next-line no-unused-vars
  // const visibleExpenses = getVisibleExpenses(expenses, filters);
  // console.log(visibleExpenses);
});

storeMoviesData(store);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
