import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';

import addMovie from './actions/movies';

const store = configureStore();
store.subscribe(() => {
  const { movies, filters } = store.getState();
  console.log('MoviesStore:', movies);
  console.log('FiltersStore:', filters);
  // eslint-disable-next-line no-unused-vars
  // const visibleExpenses = getVisibleExpenses(expenses, filters);
  // console.log(visibleExpenses);
});

store.dispatch(addMovie({
  imdbID: 'tt1201607', title: 'Harry Potter and the Deathly Hallows: Part 2', genre: 'Adventure, Drama, Fantasy, Mystery', year: '2011',
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
