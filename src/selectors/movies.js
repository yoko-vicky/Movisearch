const getVisibleMovies = (movies, { title, period }) => movies.filter((movie) => {
  const matchFilterTitle = movie.title ? movie.title.toLowerCase().includes(title) : true;
  const matchPeriod = period >= 1800 ? (period <= movie.year && period + 10 > movie.year) : true;
  return matchFilterTitle && matchPeriod;
});
export default getVisibleMovies;
