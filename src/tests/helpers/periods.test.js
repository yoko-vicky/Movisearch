import periods from '../../helpers/periods';

test('should return the array with option values starting from 1900 to the current year', () => {
  const currentYear = new Date().getFullYear();
  const periodArray = ['All', `2020-${currentYear}`, '2010-2019', '2000-2009', '1990-1999', '1980-1989', '1970-1979', '1960-1969', '1950-1959', '1940-1949', '1930-1939', '1920-1929', '1910-1919', '1900-1909'];
  expect(periods).toEqual(periodArray);
});
