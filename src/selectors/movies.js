const getVisibleMovies = (movies, { title, period }) => movies.filter((movie) => {
  const matchFilterTitle = title ? movie.Title.toLowerCase().includes(title) : false;
  const startYear = Number(period.split('-')[0]);
  const endYear = Number(period.split('-')[1]);
  const movieYear = Number(movie.Year);
  const matchPeriod = (period === 'All' || movie.Yaer === 'N/A') ? true : (startYear <= movieYear && endYear >= movieYear);
  return matchFilterTitle && matchPeriod;
});
export default getVisibleMovies;
