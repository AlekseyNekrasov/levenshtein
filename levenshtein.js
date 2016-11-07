'use strict';

class Levenshtein {
  constructor(a, b) {
    let distance;

    if (!a.length) {
      distance = b.length;
    }

    if (!b.length) {
      distance = a.length;
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

    const findMinValueAround = (i, j) => Math.min(
      matrix[i - 1][j - 1],
      Math.min(matrix[i][j - 1], matrix[i - 1][j])
    );

    if(!distance) {
      // Fill in the rest of the matrix
      for (let i = 1; i <= b.length; i++) {
          for (let j = 1; j <= a.length; j++) {
              matrix[i][j] = b.charAt(i - 1) == a.charAt(j - 1) // chars are equal
                  ? matrix[i - 1][j - 1] // prev element on diagonal
                  : findMinValueAround(i, j) + 1;
          }
      }

      distance = matrix[b.length][a.length];
    }

    Object.assign(this, {
      matrix,
      distance
    })
  }

  getDistance() {
    return this.distance;
  }

  getMatrix() {
    return this.matrix;
  }
};

module.exports = Levenshtein
