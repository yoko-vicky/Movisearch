import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MoviesList from '../../components/MoviesList';
import createTestStore from '../fixtures/createTestStore';
// import movieData from '../fixtures/movieData';

describe('MoviesList', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should render the initial message before users search a movie', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MoviesList />
      </Provider>,
    );
    await findByText('Sorry, any movies have not been found. Try to search again!');
  });

  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MoviesList />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
