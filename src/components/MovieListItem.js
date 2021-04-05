import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
  </div>
);

MovieListItem.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

MovieListItem.defaultProps = {
  movie: {
    imdbID: '',
    title: '',
    year: '2000',
    posterURL: '',
  },
};

export default MovieListItem;
