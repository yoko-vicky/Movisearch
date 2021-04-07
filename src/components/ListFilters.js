import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitleFilter, setPeriodFilter } from '../actions/filters';
import periods from '../helpers/periods';

class ListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.onReset = this.onReset.bind(this);
    const { filters } = this.props;
    this.state = {
      title: filters.title || '',
      period: filters.period || 'All',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    if (title.match(/^[a-zA-Z0-9\s]{0,30}$/g)) {
      this.setState(() => ({ title, error: '' }));
    } else {
      this.setState(() => ({
        error: 'Title should be provided less than 30 characters.',
      }));
    }
  }

  onPeriodChange = (e) => {
    const period = e.target.value;
    this.setState(() => ({ period }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { setTitleFilter, setPeriodFilter } = this.props;
    const { title, period } = this.state;

    if (!title) {
      this.setState(() => ({
        error: 'Keyword to search title should be provided.',
      }));
    } else {
      setTitleFilter(title.trim().toLowerCase());
      setPeriodFilter(period);
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
            Clear
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  setPeriodFilter: (period) => dispatch(setPeriodFilter(period)),
});

ListFilters.propTypes = {
  setTitleFilter: PropTypes.func,
  setPeriodFilter: PropTypes.func,
  filters: PropTypes.instanceOf(Object),
};

ListFilters.defaultProps = {
  setTitleFilter: null,
  setPeriodFilter: null,
  filters: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters);
