import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleMovies from '../selectors/movies';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => (
  <div>
    {movies.map((movie) => {
      const {
        title, id, year, posterURL,
      } = movie;
      return (
        <MovieListItem
          title={title}
          id={id}
          year={year}
          posterURL={posterURL}
          key={id}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state) => ({
  movies: getVisibleMovies(state.movies, state.filters),
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

MoviesList.defaultProps = {
  movies: [],
};

export default connect(mapStateToProps)(MoviesList);
