import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitleFilter, setPeriodFilter } from '../actions/filters';

class ListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.state = {
      title: '',
      period: '',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = (e.target.value).trim().toLowerCase();
    if (title.match(/^[a-zA-Z0-9]{0,15}$/)) {
      this.setState(() => ({ title }));
      this.setState(() => ({ error: '' }));
    } else {
      this.setState(() => ({
        error: 'Title should be provided less than 15 characters.',
      }));
    }
  }

  onPeriodChange = (e) => {
    const period = e.target.value;
    this.setState(() => ({ period }));
    if (period.match(/^[0-9]{4}$/) && period >= 1900) {
      this.setState(() => ({ error: '' }));
    } else {
      this.setState(() => ({
        error: 'Period should be provided 4 digit year number between 1900 and 2020.',
      }));
    }
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
      setTitleFilter(title);
      setPeriodFilter(period);
      // this.setState(() => ({ error: '', title: '', period: '' }));
    }
  }

  render() {
    const {
      title, period, error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Search by Title"
            value={title}
            onChange={this.onTitleChange}
            name="title"
          />
          <input
            type="number"
            min="1900"
            max="2020"
            step="10"
            onChange={this.onPeriodChange}
            placeholder="Search by Period"
            value={period}
            name="period"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  setPeriodFilter: (period) => dispatch(setPeriodFilter(period)),
});

ListFilters.propTypes = {
  setTitleFilter: PropTypes.func,
  setPeriodFilter: PropTypes.func,
};

ListFilters.defaultProps = {
  setTitleFilter: null,
  setPeriodFilter: null,
};

export default connect(undefined, mapDispatchToProps)(ListFilters);
