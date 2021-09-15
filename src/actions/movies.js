export const addMovies = (movies = []) => ({
  type: 'ADD_MOVIES',
  movies,
});

export const updateMovie = (id = '', update = {}) => ({
  type: 'UPDATE_MOVIE',
  id,
  update,
});

export const addFavorite = (id = '') => ({
  type: 'ADD_FAVORITE',
  id,
});
export const removeFavorite = (id = '') => ({
  type: 'REMOVE_FAVORITE',
  id,
});
