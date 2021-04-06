import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImg from '../assets/images/no-img.jpg';

const MovieListItem = ({
  title, imdbID, year, posterURL,
}) => (
  <div className="movies__item">
    <Link to={`/${imdbID}`} className="movies__item__link">
      <img src={posterURL === 'N/A' ? noImg : posterURL} alt={title || `Movie-${imdbID}`} className="movies__item__image" />
    </Link>
    <Link to={`/${imdbID}`} className="movies__item__text">
      <h2 className="movies__item__title">{title || `Movie ${imdbID}`}</h2>
      <div className="movies__item__year">{year || ''}</div>
    </Link>
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
