import React from 'react';
import getListData from '../helpers/getListData';
import getMovieData from '../helpers/getMovieData';

const getMovies = async () => {
  const movieList = await getListData();
  console.log('MoviesData', movieList.data.Search);
};

const getMovie = async () => {
  const movieData = await getMovieData();
  console.log('Movie', movieData);
};

getMovies();
getMovie();

const Home = () => {
  console.log('a');
  return (
    <div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
