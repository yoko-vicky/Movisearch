export const setTitleFilter = (title = '') => ({
  type: 'SET_TITLE_FILTER',
  title,
});

export const setPeriodFilter = (period = 'All') => ({
  type: 'SET_PERIOD_FILTER',
  period,
});
