export const getKeys = (array) => {
  if (array.users.length > 0) {
    const keys = Object.keys(array.users[1]);
    return keys.sort();
  }
};
