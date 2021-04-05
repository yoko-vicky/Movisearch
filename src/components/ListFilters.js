import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import getListData from '../helpers/getListData';
import { setTitleFilter, setPeriodFilter, setGenreFilter } from '../actions/filters';
// import addMovie from '../actions/movies';

// const getMovies = async () => {
//   const movieList = await getListData();
//   movieList.forEach((movie) => {
//     // eslint-disable-next-line no-console
//     console.log(movie.Title);
//   });
// };

// getMovies();

class ListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.state = {
      title: '',
      period: '',
      genre: '',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const { setTitleFilter } = this.props;
    const title = (e.target.value).trim();
    if (title.match(/^[a-zA-Z0-9]{0,15}$/)) {
      this.setState(() => ({ title }));
      this.setState(() => ({ error: '' }));
      setTitleFilter(title);
    } else {
      this.setState(() => ({
        error: 'Title should be provided less than 15 characters.',
      }));
    }
  }

  onPeriodChange = (e) => {
    const { setPeriodFilter } = this.props;
    const period = e.target.value;
    this.setState(() => ({ period }));
    if (period.match(/^[0-9]{4}$/) && period >= 1800) {
      this.setState(() => ({ error: '' }));
      setPeriodFilter(period);
    } else {
      this.setState(() => ({
        error: 'Period should be provided 4 digit year number between 1800 and 2020.',
      }));
    }
  }

  onGenreChange = (e) => {
    const { setGenreFilter } = this.props;
    const genre = (e.target.value).trim();
    if (genre.match(/^[a-zA-Z]{0,10}$/)) {
      this.setState(() => ({ error: '' }));
      this.setState(() => ({ genre }));
      setGenreFilter(genre);
    } else {
      this.setState(() => ({
        error: 'Genre should be provided only less than 10 alphabet characters.',
      }));
    }
  }

  render() {
    const {
      title, period, genre, error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Input keyword to search movies by title"
          value={title}
          onChange={this.onTitleChange}
        />
        <input
          type="number"
          min="1800"
          max="2020"
          step="10"
          onChange={this.onPeriodChange}
          placeholder="Input the period to search movies"
          value={period}
        />
        <input
          type="text"
          placeholder="Input keyword to search movies by genre"
          value={genre}
          onChange={this.onGenreChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  setPeriodFilter: (period) => dispatch(setPeriodFilter(period)),
  setGenreFilter: (genre) => dispatch(setGenreFilter(genre)),
});

ListFilters.propTypes = {
  setTitleFilter: PropTypes.func,
  setPeriodFilter: PropTypes.func,
  setGenreFilter: PropTypes.func,
};

ListFilters.defaultProps = {
  setTitleFilter: null,
  setPeriodFilter: null,
  setGenreFilter: null,
};

export default connect(undefined, mapDispatchToProps)(ListFilters);
