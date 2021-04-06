import getListData from './getListData';
import { addMovie } from '../actions/movies';

const setDataToStore = (query, store) => {
  getListData(query).then((data) => {
    const { movies } = store.getState();
    data.forEach((item) => {
      const index = movies.findIndex((movie) => movie.imdbID === item.imdbID);
      if (index < 0) {
        store.dispatch(addMovie({
          imdbID: item.imdbID,
          title: item.Title,
          genre: item.Genre,
          year: item.Year,
          plot: item.Plot,
          posterURL: item.Poster,
          director: item.Director,
          actors: item.actors,
        }));
      }
    });
  }).catch((e) => {
    // eslint-disable-next-line no-unused-vars
    const error = e;
  });
};

export default setDataToStore;
