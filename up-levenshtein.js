'use strict';

module.exports = { getDistance, getClosest, getLastMatrix };

let lastMatrix = [];

/**
* Get Levenshtein distance between two stings.
* @param {string} a
* @param {string} b
* @returns {number} distance
*/
function getDistance(a, b, config = {}) {
  if (!a.length) {
    return b.length;
  }

  if (!b.length) {
    return a.length;
  }

  if(config.caseSensitive === false) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }

  const matrix = [];
  // increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
  }

  // increment each column in the first row
  for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
          matrix[i][j] = b.charAt(i - 1) == a.charAt(j - 1) // chars are equal
              ? matrix[i - 1][j - 1] // prev element on diagonal
              : findMinValueAround(matrix, i, j) + 1;
      }
  }

  lastMatrix = matrix;

  return matrix[b.length][a.length];
}

/**
* Finds a minimum value for an element in martix.
* @param {array} matrix
* @param {number} i
* @param {number} j
* @returns {number} minVal
*/
function findMinValueAround(matrix, i, j) {
  return Math.min(
    matrix[i - 1][j - 1],
    Math.min(matrix[i][j - 1], matrix[i - 1][j])
  );
};

/**
* Get closest element to the current
* @param {string} target
* @param {array} candidates
* @returns {string} item
*/
function getClosest(target, items, config = {}) {
  let closest;
  let closestDistance = Infinity;

  items.forEach( item => {
    const dist = getDistance(target, item, config);

    if(dist < closestDistance) {
      closestDistance = dist;
      closest = item;
    }
  });

  return closest;
}

/**
* Get last processed matrix.
* @returns {array} lastMatrix
*/
function getLastMatrix() {
  return lastMatrix;
}
