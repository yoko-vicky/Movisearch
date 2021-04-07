export const addMovie = ({
  imdbID = '',
  title = '',
  year = '2000',
  posterURL = '',
  plot = '',
  director = '',
  actors = '',
  genre = '',

} = {}) => ({
  type: 'ADD_MOVIE',
  movie: {
    imdbID,
    title,
    year: Number(year),
    posterURL,
    plot,
    director,
    actors,
    genre,
  },
});

export const updateMovie = (id, update) => ({
  type: 'UPDATE_MOVIE',
  id,
  update,
});

export const addMovies = (movies = []) => ({
  type: 'ADD_MOVIES',
  movies,
});
