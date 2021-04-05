import addMovie from '../actions/movies';
import getListData from './getListData';

const storeMoviesData = async (store) => {
  const listData = await getListData();
  listData.forEach((movie) => {
    store.dispatch(addMovie({
      imdbID: movie.imdbID,
      title: movie.Title,
      genre: movie.Genre,
      year: movie.Year,
      plot: movie.Plot,
      posterURL: movie.Poster,
      director: movie.Director,
      actors: movie.actors,
    }));
  });
};

export default storeMoviesData;
