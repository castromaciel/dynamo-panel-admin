export const getKeys = (data) => {
  if (data.length > 0) {
    const keys = Object.keys(data[0]);
    return keys.sort();
  }
};
