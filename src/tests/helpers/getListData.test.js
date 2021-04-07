import axios from 'axios';
import getListData from '../../helpers/getListData';

jest.mock('axios');

describe('getListData', () => {
  test('should fetch the movie list data', async () => {
    const apiData = { data: { Search: { test: 'this is test' } } };
    axios.get.mockResolvedValue(apiData);
    const response = await getListData('test');
    expect(response).toEqual({ test: 'this is test' });
  });

  test('return error if it is unable to fetch', async () => {
    const error = 'Unable to fetch the movie list data';
    axios.get.mockRejectedValue(error);
    const response = await getListData();
    expect(response).toEqual(error);
  });
});
