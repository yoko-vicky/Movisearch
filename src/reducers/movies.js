const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [
        ...action.movies,
      ];
    case 'UPDATE_MOVIE':
      return state.map((mv) => (mv.imdbID === action.id ? { ...mv, ...action.update } : mv));
    case 'ADD_FAVORITE':
      return state.map((mv) => (mv.imdbID === action.id ? { ...mv, favorite: true } : mv));
    case 'REMOVE_FAVORITE':
      return state.map((mv) => (mv.imdbID === action.id ? { ...mv, favorite: false } : mv));
    default:
      return state;
  }
};

export default moviesReducer;
