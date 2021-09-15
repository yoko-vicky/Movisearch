import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleMovies from '../selectors/movies';
import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies }) => (
  <div>
    {movies.length === 0 && <p className="error-msg">Sorry, any movies have not been found. Try to search again!</p>}
    {movies.length && (
    <div className="movies">
      {movies.map((movie) => (
        <MoviesListItem
          movie={movie}
          Title={movie.Title}
          imdbID={movie.imdbID}
          Year={movie.Year}
          Poster={movie.Poster}
          key={movie.imdbID}
        />
      ))}
    </div>
    )}
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
