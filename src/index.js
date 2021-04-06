import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addMovie } from './actions/movies';
import './assets/styles/style.scss';

import getListData from './helpers/getListData';
import getVisibleMovies from './selectors/movies';

const store = configureStore();

const setDataToStore = (query) => {
  getListData(query).then((data) => {
    const { movies } = store.getState();
    data.forEach((item) => {
      const index = movies.findIndex((movie) => movie.imdbID === item.imdbID);
      if (index < 0) {
        store.dispatch(addMovie({
          imdbID: item.imdbID,
          title: item.Title,
          genre: item.Genre,
          year: item.Year,
          plot: item.Plot,
          posterURL: item.Poster,
          director: item.Director,
          actors: item.actors,
        }));
      }
    });
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.log('MYERROR', error);
  });
};

store.subscribe(() => {
  const { movies, filters } = store.getState();
  // eslint-disable-next-line no-console
  // console.log('MoviesStore:', movies);
  // eslint-disable-next-line no-console
  // console.log('FiltersStore:', filters);
  console.log('FiltersTitle:', filters.title);
  // eslint-disable-next-line no-unused-vars
  const visibleMovies = getVisibleMovies(movies, filters);
  setDataToStore(filters.title);
  console.log(movies);
  console.log(visibleMovies);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
// setDataToStore('harry');
