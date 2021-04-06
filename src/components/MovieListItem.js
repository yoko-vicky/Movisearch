import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieListItem = ({
  title, id, year, posterURL,
}) => (
  <div>
    <Link to={`/${id}`}><h2>{title || `Movie ${id}`}</h2></Link>
    <p>{year || ''}</p>
    {posterURL && <img src={posterURL} alt={title || `Movie ${id}`} />}
  </div>
);

MovieListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  posterURL: PropTypes.string,
};

MovieListItem.defaultProps = {
  id: '',
  title: '',
  year: 2000,
  posterURL: '',
};

export default MovieListItem;
