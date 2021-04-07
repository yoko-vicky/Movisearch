import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleMovies from '../selectors/movies';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => (
  <div>
    {movies.length === 0 && <p className="error-msg">Sorry, any movies have not been found. Try to search again!</p>}
    <div className="movies">
      {movies.map((movie) => {
        const {
          Title, imdbID, Year, Poster,
        } = movie;
        return (
          <MovieListItem
            Title={Title}
            imdbID={imdbID}
            Year={Year}
            Poster={Poster}
            key={imdbID}
          />
        );
      })}
    </div>
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
