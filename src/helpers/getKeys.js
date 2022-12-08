export const getKeys = (array) => {
  console.log(array);
  if (array.data.length > 0) {
    const keys = Object.keys(array.data[0]);
    return keys.sort();
  }
};
