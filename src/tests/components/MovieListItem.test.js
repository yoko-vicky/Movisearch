import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MoviesListItem from '../../components/MoviesListItem';

describe('MoviesListItem', () => {
  test('renders MoviesListItem component ', () => {
    render(<MoviesListItem />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Movie')).toBeInTheDocument;
  });
});
