export const getKeys = (data) => {
  if (data.length > 0) {
    const keys = Object.keys(data[0]);
    const newKeys = keys.filter(key => key !== 'idbeneficio');
    return newKeys.sort();
  }
};
