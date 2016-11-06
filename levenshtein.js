'use strict';

class Levenshtein {
  constructor(a, b) {
    Object.assign(this, {
      matrix: [],
      a,
      b
    })

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        this.matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        this.matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            this.matrix[i][j] = b.charAt(i - 1) == a.charAt(j - 1) // chars are equal
                ? this.matrix[i - 1][j - 1] // prev element on diagonal
                : this.findMinValueAround(this.matrix, i, j) + 1;
        }
    }
  }

  getDistance() {
    if (!this.a.length) {
      return this.b.length;
    }

    if (!this.b.length) {
      return this.a.length;
    }

    return this.matrix[this.b.length][this.a.length];
  }

  getMatrix() {
    return this.matrix;
  }

  findMinValueAround(matrix, i, j) {
    return Math.min(matrix[i - 1][j - 1], Math.min(matrix[i][j - 1], matrix[i - 1][j]))
  };
};

module.exports = Levenshtein
