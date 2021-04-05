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
  // eslint-disable-next-line no-console
  console.log('MoviesStore:', movies);
  // eslint-disable-next-line no-console
  console.log('FiltersStore:', filters);
  // eslint-disable-next-line no-unused-vars
  // const visibleExpenses = getVisibleExpenses(expenses, filters);
  // console.log(visibleExpenses);
});

store.dispatch(addMovie({
  imdbID: 'tt1201607', title: 'Harry Potter and the Deathly Hallows: Part 2', genre: 'Adventure, Drama, Fantasy, Mystery', year: '2011', plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.", posterURL: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg', director: 'David Yates', actors: 'Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe',
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
