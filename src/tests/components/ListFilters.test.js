import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ListFilters from '../../components/ListFilters';
import createTestStore from '../fixtures/createTestStore';

describe('ListFilters', () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  test('should render the initial message before users search a movie', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <ListFilters />
      </Provider>,
    );
    await findByText('2020-2021');
  });

  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={store}>
        <BrowserRouter>
          <ListFilters />
        </BrowserRouter>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
