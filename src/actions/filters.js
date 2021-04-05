export const setTitleFilter = (title = '') => ({
  type: 'SET_TITLE_FILTER',
  title,
});

export const setPeriodFilter = (period = '') => ({
  type: 'SET_PERIOD_FILTER',
  period: Number(period),
});

export const setGenreFilter = (genre = '') => ({
  type: 'SET_GENRE_FILTER',
  genre,
});
