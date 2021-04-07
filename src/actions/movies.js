export const addMovies = (movies = []) => ({
  type: 'ADD_MOVIES',
  movies,
});

export const updateMovie = (id, update) => ({
  type: 'UPDATE_MOVIE',
  id,
  update,
});
