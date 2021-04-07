const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [
        ...action.movies,
      ];
    case 'ADD_MOVIE':
      return [
        ...state,
        action.movie,
      ];
    case 'UPDATE_MOVIE':
      return state.map((mv) => (mv.imdbID === action.id ? { ...mv, ...action.update } : mv));
    default:
      return state;
  }
};

export default moviesReducer;
