const addMovie = ({
  imdbID = '',
  title = '',
  genre = [],
  year = '2000',
  plot = '',
  posterURL = '',
  director = '',
  actors = [],
} = {}) => ({
  type: 'ADD_MOVIE',
  movie: {
    imdbID,
    title,
    genre: genre.split(', '),
    year: Number(year),
    plot,
    posterURL,
    director,
    actors: actors.split(', '),
  },
});

export default addMovie;
