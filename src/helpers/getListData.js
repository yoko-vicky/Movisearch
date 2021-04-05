import axios from 'axios';

const getListData = async () => {
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      s: 'harry',
      plot: 'full',
      page: '50',
    },
  });
  return data;
};

export default getListData;