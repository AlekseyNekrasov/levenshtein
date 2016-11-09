const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const lev = require('../up-levenshtein')

// add tests
suite.add('Small difference', function(){
  !!lev.getDistance('some1', 'some2')
})
.add('Average difference', function(){
  !!lev.getDistance('alexey@nekrasov.nl', 'alexey@gmail.com')
})
.add('Large difference', function(){
  !!lev.getDistance('I don\'t really need to compare long texts', 'But what wouldn\'t you do for good benchmarks?')
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
// run async
.run({ 'async': false });
