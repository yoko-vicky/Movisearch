export const setTitleFilter = (title = '') => ({
  type: 'SET_TITLE_FILTER',
  title,
});

export const setPeriodFilter = (period = undefined) => ({
  type: 'SET_PERIOD_FILTER',
  period,
});

export const setGenreFilter = (genre = '') => ({
  type: 'SET_GENRE_FILTER',
  genre,
});
