import { v4 as uuid } from 'uuid';

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
    id: uuid(),
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
