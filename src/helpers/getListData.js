import axios from 'axios';
import { addMovie } from '../actions/movies';

const getListDataFromAPI = async (query) => {
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      s: query,
    },
  });
  return data.data.Search;
};

const getListData = async (store, query) => {
  const listData = await getListDataFromAPI(query);
  const newData = await listData.map((movie) => ({
    imdbID: movie.imdbID,
    title: movie.Title,
    genre: movie.Genre,
    year: movie.Year,
    plot: movie.Plot,
    posterURL: movie.Poster,
    director: movie.Director,
    actors: movie.actors,
  }));
  newData.map((movie) => store.dispatch(addMovie(movie)));
  //
};

export default getListData;
