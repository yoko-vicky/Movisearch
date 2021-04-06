const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        action.movie,
      ];
    case 'UPDATE_MOVIE':
      // eslint-disable-next-line max-len
      return state.map((movie) => (movie.imdbID === action.id ? { ...movie, ...action.update } : movie));
    default:
      return state;
  }
};

export default moviesReducer;
