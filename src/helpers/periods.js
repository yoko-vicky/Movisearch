const startYear = 1900;
const now = new Date();
const endYear = now.getFullYear();
const periodArray = [];

const createPeriodOptions = () => {
  for (let i = startYear; i <= endYear; i += 10) {
    if (endYear < (i + 9)) {
      periodArray.push(`${i}-${endYear}`);
    } else {
      periodArray.push(`${i}-${i + 9}`);
    }
  }
};

createPeriodOptions();
const periods = [...periodArray, 'All'].reverse();

export default periods;
