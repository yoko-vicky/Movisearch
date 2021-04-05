import axios from 'axios';

const getMovieData = async () => {
  const imdbId = 'tt1201607';
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      i: imdbId,
    },
  });
  return data;
};

export default getMovieData;
