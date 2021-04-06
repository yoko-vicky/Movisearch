import axios from 'axios';

const getMovieData = async (imdbID) => {
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      i: imdbID,
    },
  }).then((response) => response.data).catch((error) => error);
  return data;
};

export default getMovieData;
