/**
 * Flatten array to a single 1D array
 * @param {Array} arr The array to flatten
 * @param {Array} [[]] res Initial array, defaults to `[]`
 * @returns {String} Flattened 1D array
 */
module.exports = function flatten(arr, res = []) {
  let i = 0;
  const len = arr.length;
  for (; i < len; i++) {
    const cur = arr[i];
    Array.isArray(cur) ? flatten(cur, res) : res.push(cur);
  }
  return res;
}
