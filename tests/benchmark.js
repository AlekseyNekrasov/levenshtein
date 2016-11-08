const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const lev = require('../up-levenshtein')

// add tests
suite.add('getDistance', function(){
  !!lev.getDistance('some1', 'some2')
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
// run async
.run({ 'async': false });
