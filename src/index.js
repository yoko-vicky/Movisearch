import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addMovie } from './actions/movies';
import './assets/styles/style.scss';

import getListData from './helpers/getListData';

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

const setDataToStore = (query) => {
  getListData(query).then((data) => {
    console.log(data);
    data.forEach((movie) => {
      store.dispatch(addMovie({
        imdbID: movie.imdbID,
        title: movie.Title,
        genre: movie.Genre,
        year: movie.Year,
        plot: movie.Plot,
        posterURL: movie.Poster,
        director: movie.Director,
        actors: movie.actors,
      }));
    });
  }).catch((error) => {
    console.log(error);
  });
};

setDataToStore('harry');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
getListData(store, 'harry');
