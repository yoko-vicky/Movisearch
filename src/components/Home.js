import React from 'react';
import ListFilters from './ListFilters';
// import MovieListItem from './MovieListItem';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      ama: 'ashaks',
    };
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <ListFilters />
        <div className="movies">
          asjalsjalsja
        </div>
      </div>
    );
  }
}

export default Home;
