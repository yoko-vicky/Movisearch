const addMovie = ({
  imdbID = '',
  title = '',
  genre = [],
  year = '2000',
} = {}) => ({
  type: 'ADD_MOVIE',
  movie: {
    imdbID,
    title,
    genre: genre.split(', '),
    year: Number(year),
  },
});

export default addMovie;
