const getVisibleMovies = (movies, { title, period }) => movies.filter((movie) => {
  const matchFilterTitle = movie.title ? movie.title.toLowerCase().includes(title) : true;
  const startYear = Number(period.split('-')[0]);
  const endYear = Number(period.split('-')[1]);
  const matchPeriod = period === 'All' ? true : (startYear <= movie.year && endYear >= movie.year);
  return matchFilterTitle && matchPeriod;
});
export default getVisibleMovies;
