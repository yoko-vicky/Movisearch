import React from 'react';
import ListFilters from './ListFilters';
import MoviesList from './MoviesList';

const Home = () => (
  <div className="container">
    <ListFilters />
    <MoviesList />
  </div>
);
export default Home;
