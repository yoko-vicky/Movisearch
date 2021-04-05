const addMovie = ({
  imdbID = '',
  title = '',
  year = '2000',
  posterURL = '',
} = {}) => ({
  type: 'ADD_MOVIE',
  movie: {
    imdbID,
    title,
    year: Number(year),
    posterURL,
  },
});

export default addMovie;
