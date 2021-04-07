import { addMovies, updateMovie } from '../../actions/movies';

describe('Action movies', () => {
  test('should return addMovies action object with a given text', () => {
    const movies = [
      {
        imdbID: 'tt12345', Title: 'Harry Potter', Year: '2007', type: 'movie', Poster: 'N/A',
      },
      {
        imdbID: 'tt98765', Title: 'Terminal', Year: '2006', type: 'movie', Poster: 'N/A',
      },
    ];
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
    const update = {
      Plot: 'This movie is amazing. Wacth it right away!',
      Director: 'Yoko Saka',
      Actors: 'Tom Hanks, Yoko Saka',
      Genre: 'Comedy, Fantasy',
    };
    const id = 'tt12345';
    const action = updateMovie(id, update);
    expect(action).toEqual({
      type: 'UPDATE_MOVIE',
      id,
      update,
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
