import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleMovies from '../selectors/movies';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => (
  <>
    {movies.length === 0 && <p className="error-msg">Sorry, any movies have not been found.</p>}
    <div className="movies">
      {movies.map((movie) => {
        const {
          title, imdbID, year, posterURL,
        } = movie;
        return (
          <MovieListItem
            title={title}
            imdbID={imdbID}
            year={year}
            posterURL={posterURL}
            key={imdbID}
          />
        );
      })}
    </div>
  </>
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
