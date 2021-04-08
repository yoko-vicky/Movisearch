import moviesReducer from '../../reducers/movies';
import movies from '../fixtures/movies';
import updateMovieObj from '../fixtures/updateMovieObj';

describe('moviesReducer', () => {
  test('should set empty array by default', () => {
    const state = moviesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should add movies as a new state', () => {
    const action = {
      type: 'ADD_MOVIES',
      movies,
    };
    const state = moviesReducer(undefined, action);
    expect(state).toEqual([...movies]);
  });

  test('should update a movie with a given id', () => {
    const action = {
      type: 'UPDATE_MOVIE',
      id: movies[0].imdbID,
      update: updateMovieObj,
    };
    const state = moviesReducer(movies, action);
    expect(state[0].Director).toEqual('Yoko Saka');
  });

  test('should not update a movie if the object with a given id does not exist', () => {
    const action = {
      type: 'UPDATE_MOVIE',
      id: '192jayq',
      update: updateMovieObj,
    };
    const state = moviesReducer(movies, action);
    expect(state).toEqual(movies);
  });
});
