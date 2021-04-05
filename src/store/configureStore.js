import { createStore, combineReducers } from 'redux';
import moviesReducer from '../reducers/movies';
import filtersReducer from '../reducers/filters';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
    }),
  );
  return store;
};

export default configureStore;
