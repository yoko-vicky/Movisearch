import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';
// import setDataToStore from './helpers/setDataToStore';

const store = configureStore();

// store.subscribe(() => {
//   const { filters } = store.getState();
//   if (filters.title) { setDataToStore(filters.title, store); }
// });

store.subscribe(() => {
  const { movies, filters } = store.getState();
  console.log('movies', movies);
  console.log('filters', filters);
  // const visibleMovies = getVisibleMovies(movies, filters);
  // console.log(visibleMovies);
  // if (filters.title) { setDataToStore(filters.title); }
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
