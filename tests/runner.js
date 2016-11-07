Object.assign(global, {
  Levenshtein: require('../levenshtein'),
  expect: require('chai').expect
});
