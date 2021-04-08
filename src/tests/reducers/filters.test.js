import filtersReducer from '../../reducers/filters';

describe('filtersReducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      title: '',
      period: 'All',
    };
  });

  test('should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultState);
  });

  test('should set title with a given string', () => {
    const title = 'wonderful';
    const action = {
      type: 'SET_TITLE_FILTER',
      title,
    };
    const state = filtersReducer(undefined, action);
    expect(state.title).toEqual(title);
  });

  test('should set period with a given string', () => {
    const period = '1990-1999';
    const action = {
      type: 'SET_PERIOD_FILTER',
      period,
    };
    const state = filtersReducer(undefined, action);
    expect(state.period).toEqual(period);
  });
});
