import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../../containers/Home';
import createTestStore from '../fixtures/createTestStore';

describe('Home', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should render the initial message before users search a movie', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    await findByText('Sorry, any movies have not been found. Try to search again!');
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
