const defaultFiltersState = {
  title: '',
  period: 0,
  genre: '',
};

const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return {
        ...state,
        title: action.title,
      };
    case 'SET_PERIOD_FILTER':
      return {
        ...state,
        period: action.period,
      };
    case 'SET_GENRE_FILTER':
      return {
        ...state,
        genre: action.genre,
      };
    default:
      return state;
  }
};

export default filtersReducer;
