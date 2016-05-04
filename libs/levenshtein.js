'use strict';

const matrix = [];

const getDistance = (a, b) => {
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    // increment along the first column of each row
    let i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    let j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            matrix[i][j] = b.charAt(i - 1) == a.charAt(j - 1) // chars are equal
                ? matrix[i - 1][j - 1] // prev element on diagonal
                : _findMinValueAround(matrix, i, j) + 1;
        }
    }

    return matrix[b.length][a.length]; // take the last element
}

const _findMinValueAround = (matrix, i, j) => Math.min(matrix[i - 1][j - 1], Math.min(matrix[i][j - 1], matrix[i - 1][j]));

module.exports = { getDistance };
