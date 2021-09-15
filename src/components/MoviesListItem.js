import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import noImg from '../assets/images/no-img.jpg';
import { removeFavorite, addFavorite } from '../actions/movies';

const MoviesListItem = ({
  movie, Title, imdbID, Year, Poster, removeFavorite, addFavorite,
}) => {
  const toggleFavoriteState = () => {
    console.log('before', movie);
    // eslint-disable-next-line no-console
    if (movie.favorite) {
      removeFavorite(imdbID);
      console.log('remove favorite');
    } else {
      addFavorite(imdbID);
      console.log('add favorite');
    }
    console.log('after', movie);
  };
  return (
    <div className="movies__item">
      <Link to={`/${imdbID}`} className="movies__item__link">
        <img src={Poster === 'N/A' ? noImg : Poster} alt={Title || `Movie-${imdbID}`} className="movies__item__image" />
      </Link>
      <Link to={`/${imdbID}`} className="movies__item__text">
        <h2 className="movies__item__title">{Title || `Movie ${imdbID}`}</h2>
        <div className="movies__item__year">{Year || ''}</div>
      </Link>
      <div className="movies__item__star" onClick={toggleFavoriteState} aria-hidden="true">
        <FaStar />
        <FaRegStar />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (id) => dispatch(removeFavorite(id)),
  addFavorite: (id) => dispatch(addFavorite(id)),
});

MoviesListItem.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
  imdbID: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
};

MoviesListItem.defaultProps = {
  imdbID: '',
  Title: '',
  Year: '',
  Poster: '',
  removeFavorite: null,
  addFavorite: null,
};

export default connect(undefined, mapDispatchToProps)(MoviesListItem);
