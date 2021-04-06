import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieListItem = ({
  title, imdbID, year, posterURL,
}) => (
  <div>
    <Link to={`/${imdbID}`}><h2>{title || `Movie ${imdbID}`}</h2></Link>
    <p>{year || ''}</p>
    {posterURL && <img src={posterURL} alt={title || `Movie ${imdbID}`} />}
  </div>
);

MovieListItem.propTypes = {
  imdbID: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  posterURL: PropTypes.string,
};

MovieListItem.defaultProps = {
  imdbID: '',
  title: '',
  year: 2000,
  posterURL: '',
};

export default MovieListItem;
