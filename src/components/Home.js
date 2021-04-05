import React from 'react';
import ListFilters from './ListFilters';
import MoviesList from './MoviesList';

const Home = () => (
  <div>
    <h2>Movies</h2>
    <ListFilters />
    <MoviesList />
  </div>
);
export default Home;
