import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MovieDetail from '../../containers/MovieDetail';
import createTestStore from '../fixtures/createTestStore';

describe('MovieDetail', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should render the initial message before users search a movie', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MovieDetail />
      </Provider>,
    );
    await findByText('Sorry... Not Found.');
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <MovieDetail />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
