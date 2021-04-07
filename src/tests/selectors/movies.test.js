import getVisibleMovies from '../../selectors/movies';
import movies from '../fixtures/movies';
import filters from '../fixtures/filters';

describe('selectors', () => {
  test('should return the filtered movies', () => {
    const result = getVisibleMovies(movies, filters[1]);
    expect(result).toEqual([movies[0]]);
  });

  test('should return the original movies if there is no argument', () => {
    const movies = [];
    const defaultFilter = filters[0];
    const result = getVisibleMovies(movies, defaultFilter);
    expect(result).toEqual(movies);
  });
});
