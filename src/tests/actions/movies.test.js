import { addMovies, updateMovie } from '../../actions/movies';
import movies from '../fixtures/movies';
import updateMovieObj from '../fixtures/updateMovieObj';

describe('Action movies', () => {
  test('should return addMovies action object with a given text', () => {
    const action = addMovies(movies);
    expect(action).toEqual({
      type: 'ADD_MOVIES',
      movies,
    });
  });

  test('should return addMovies default action object if no argument is given', () => {
    const action = addMovies();
    expect(action).toEqual({
      type: 'ADD_MOVIES',
      movies: [],
    });
  });

  test('should return updateMovie action object with a given text', () => {
    const id = 'tt12345';
    const action = updateMovie(id, updateMovieObj);
    expect(action).toEqual({
      type: 'UPDATE_MOVIE',
      id,
      update: updateMovieObj,
    });
  });

  test('should return updateMovie default action object if no argument is given', () => {
    const action = updateMovie();
    expect(action).toEqual({
      type: 'UPDATE_MOVIE',
      id: '',
      update: {},
    });
  });
});
