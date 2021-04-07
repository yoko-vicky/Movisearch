import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitleFilter, setPeriodFilter } from '../actions/filters';
import { addMovies } from '../actions/movies';
import periods from '../helpers/periods';
import getListData from '../helpers/getListData';

class ListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      title: '',
      period: 'All',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    if (title.match(/^[a-zA-Z0-9\s]{0,15}$/g)) {
      this.setState(() => ({ title, error: '' }));
    } else {
      this.setState(() => ({
        error: 'Title should be provided less than 15 characters.',
      }));
    }
  }

  onPeriodChange = (e) => {
    const period = e.target.value;
    this.setState(() => ({ period }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { setTitleFilter, setPeriodFilter, addMovies } = this.props;
    const { title, period } = this.state;

    if (!title) {
      this.setState(() => ({
        error: 'Keyword to search title should be provided.',
      }));
    } else {
      setTitleFilter(title.trim().toLowerCase());
      setPeriodFilter(period);
      getListData(title.trim().toLowerCase()).then((data) => {
        addMovies(data);
      }).catch((error) => {
        this.setState(() => ({ error }));
      });
    }
  }

  onReset = () => {
    const { setTitleFilter, setPeriodFilter } = this.props;
    this.setState(() => ({ title: '', period: 'All' }));
    setTitleFilter('');
    setPeriodFilter('All');
  }

  render() {
    const {
      title, period, error,
    } = this.state;
    return (
      <div className="filters">
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={this.onSubmit} className="filters__form">
          <input
            type="text"
            placeholder="Search by Title"
            value={title}
            onChange={this.onTitleChange}
            name="title"
            className="filters__input"
          />
          <select
            name="period"
            value={period}
            onChange={this.onPeriodChange}
            className="filters__select"
          >
            {periods.map((opt) => (
              <option value={opt} key={opt}>{opt}</option>
            ))}
          </select>
          <button type="submit" className="filters__button btn">
            <span className="iconify" data-icon="gg:search" data-inline="false" />
            Search
          </button>
          <button
            type="button"
            className="btn grey"
            onClick={this.onReset}
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  setPeriodFilter: (period) => dispatch(setPeriodFilter(period)),
  addMovies: (data) => dispatch(addMovies(data)),
});

ListFilters.propTypes = {
  setTitleFilter: PropTypes.func,
  setPeriodFilter: PropTypes.func,
  addMovies: PropTypes.func,
};

ListFilters.defaultProps = {
  setTitleFilter: null,
  setPeriodFilter: null,
  addMovies: null,
};

export default connect(undefined, mapDispatchToProps)(ListFilters);
