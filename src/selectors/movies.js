const getVisibleMovies = (movies, { title, period }) => movies.filter((movie) => {
  const matchFilterTitle = title ? movie.title.toLowerCase().includes(title) : false;
  const startYear = Number(period.split('-')[0]);
  const endYear = Number(period.split('-')[1]);
  const matchPeriod = period === 'All' ? true : (startYear <= movie.year && endYear >= movie.year);
  return matchFilterTitle && matchPeriod;
});
export default getVisibleMovies;
