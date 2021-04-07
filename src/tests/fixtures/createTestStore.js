import { createStore, combineReducers } from 'redux';
import moviesReducer from '../../reducers/movies';
import filtersReducer from '../../reducers/filters';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
    }),
  );
  return store;
};

export default createTestStore;
