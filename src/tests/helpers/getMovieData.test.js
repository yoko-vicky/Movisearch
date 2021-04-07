import axios from 'axios';
import getMovieData from '../../helpers/getMovieData';
import movieData from '../fixtures/movieData';

jest.mock('axios');

describe('getMovieData', () => {
  test('should fetch the movie data using the given imdbID', async () => {
    axios.get.mockResolvedValue({ data: { ...movieData } });
    const response = await getMovieData(movieData.imdbID);
    expect(response.Title).toEqual(movieData.Title);
  });

  test('return error if it is unable to fetch', async () => {
    const error = 'Unable to fetch the movie data';
    axios.get.mockRejectedValue(error);
    const response = await getMovieData();
    expect(response).toEqual(error);
  });
});
