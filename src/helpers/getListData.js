import axios from 'axios';

const getListData = async (query) => {
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      s: query,
      page: 1,
    },
  }).then((response) => response.data.Search).catch((error) => error);
  return data;
};

export default getListData;
