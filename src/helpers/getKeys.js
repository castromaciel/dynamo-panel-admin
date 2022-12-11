export const getKeys = (array) => {
  if (array.data.length > 0) {
    const keys = Object.keys(array.data[0]);
    console.log(keys);
    return keys.sort();
  }
};
