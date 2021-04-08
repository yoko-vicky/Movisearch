import { setTitleFilter, setPeriodFilter } from '../../actions/filters';

describe('Action filters', () => {
  test('should return setTitleFilter action object with a given text', () => {
    const title = 'harry';
    const action = setTitleFilter(title);
    expect(action).toEqual({
      type: 'SET_TITLE_FILTER',
      title,
    });
  });

  test('should return setTitleFilter default action object if no argument is given', () => {
    const action = setTitleFilter();
    expect(action).toEqual({
      type: 'SET_TITLE_FILTER',
      title: '',
    });
  });

  test('should return setPeriodFilter action object with a given text', () => {
    const period = '2010-2019';
    const action = setPeriodFilter(period);
    expect(action).toEqual({
      type: 'SET_PERIOD_FILTER',
      period,
    });
  });
  test('should return setPeriodFilter default action object if no argument is given', () => {
    const action = setPeriodFilter();
    expect(action).toEqual({
      type: 'SET_PERIOD_FILTER',
      period: 'All',
    });
  });
});
