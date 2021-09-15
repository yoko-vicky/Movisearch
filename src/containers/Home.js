import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListFilters from '../components/ListFilters';
import MoviesList from '../components/MoviesList';
import getListData from '../helpers/getListData';
import { addMovies } from '../actions/movies';

const Home = ({ addMovies, filters }) => {
  const [error, setError] = useState('');

  const runGetMovies = () => {
    getListData(filters.title).then((data) => {
      addMovies(data);
    }).catch(() => {
      setError('Sorry, unable to fetch the data.');
    });
  };
  useEffect(() => {
    runGetMovies();
  }, [filters]);

  return (
    <div className="container">
      {error && <p className="error-msg">{error}</p>}
      <ListFilters />
      <MoviesList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  addMovies: (data) => dispatch(addMovies(data)),
});

Home.propTypes = {
  addMovies: PropTypes.func,
  filters: PropTypes.instanceOf(Object),
};

Home.defaultProps = {
  addMovies: null,
  filters: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
