/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  return preferences.filter((el, i, arr) => {
    return (i + 1 === arr[arr[el - 1] - 1]) && (arr[el - 1] != el)
  }).length / 3;
};
