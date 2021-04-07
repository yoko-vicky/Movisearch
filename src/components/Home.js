import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListFilters from './ListFilters';
import MoviesList from './MoviesList';
import getListData from '../helpers/getListData';
import { addMovies } from '../actions/movies';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.runGetMovies = this.runGetMovies.bind(this);
    this.state = {
      error: '',
    };
  }

  componentDidMount() {
    this.runGetMovies();
  }

  componentDidUpdate() {
    this.runGetMovies();
  }

  runGetMovies = () => {
    const { addMovies, filters } = this.props;
    getListData(filters.title).then((data) => {
      addMovies(data);
    }).catch(() => {
      this.setState(() => ({ error: 'Sorry, unable to fetch the data.' }));
    });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        {error && <p className="error-msg">{error}</p>}
        <ListFilters />
        <MoviesList />
      </div>
    );
  }
}

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
