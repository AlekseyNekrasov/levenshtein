Object.assign(global, {
  lev: require('../up-levenshtein'),
  expect: require('chai').expect
});
