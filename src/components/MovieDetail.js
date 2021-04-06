import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMovieData from '../helpers/getMovieData';
import { updateMovie } from '../actions/movies';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.getMovie = this.getMovie.bind(this);
    const { movie } = this.props;
    this.state = {
      plot: movie.plot ? movie.plot : '',
      director: movie.director ? movie.director : '',
      actors: movie.actors ? movie.actors : '',
      genre: movie.genre ? movie.genre.toString().replace(/,/g, ', ') : '',
    };
  }

  componentDidMount() {
    const {
      plot, director, actors, genre,
    } = this.state;
    if (!plot || !director || !actors || !genre) {
      this.getMovie();
    }
  }

  getMovie = async () => {
    const { movie } = this.props;
    const { updateMovie } = this.props;
    const movieData = await getMovieData(movie.imdbID);
    const update = {
      plot: movieData.Plot,
      director: movieData.Director,
      actors: movieData.Actors,
      genre: movieData.Genre,
    };
    this.setState(() => ({
      plot: update.plot,
      director: update.director,
      actors: update.actors,
      genre: update.genre,
    }));
    updateMovie(movie.imdbID, update);
  };

  render() {
    const { movie } = this.props;
    const {
      plot, director, actors, genre,
    } = this.state;

    return (
      <div>
        <h2>{movie.title}</h2>
        {movie.posterURL && <img src={movie.posterURL} alt={movie.title} />}
        {plot && <p>{plot}</p>}
        {director && <p>{director}</p>}
        {actors && <p>{actors}</p>}
        {genre && <p>{genre}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  movie: state.movies.find((movie) => movie.imdbID === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateMovie: (id, update) => dispatch(updateMovie(id, update)),
});

MovieDetail.propTypes = {
  movie: PropTypes.instanceOf(Object),
  updateMovie: PropTypes.func,
};

MovieDetail.defaultProps = {
  movie: {},
  updateMovie: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
