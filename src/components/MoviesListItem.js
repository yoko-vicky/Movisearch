import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImg from '../assets/images/no-img.jpg';

const MoviesListItem = ({
  Title, imdbID, Year, Poster,
}) => (
  <div className="movies__item">
    <Link to={`/${imdbID}`} className="movies__item__link">
      <img src={Poster === 'N/A' ? noImg : Poster} alt={Title || `Movie-${imdbID}`} className="movies__item__image" />
    </Link>
    <Link to={`/${imdbID}`} className="movies__item__text">
      <h2 className="movies__item__title">{Title || `Movie ${imdbID}`}</h2>
      <div className="movies__item__year">{Year || ''}</div>
    </Link>
  </div>
);

MoviesListItem.propTypes = {
  imdbID: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
};

MoviesListItem.defaultProps = {
  imdbID: '',
  Title: '',
  Year: '',
  Poster: '',
};

export default MoviesListItem;
