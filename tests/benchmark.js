const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const { getDistance } = require('../up-levenshtein');

suite.add('Average difference', function(){
  !!getDistance('Some1', 'Some2')
})
.add('Average difference', function(){
  !!getDistance('alexey@nekrasov.nl', 'alexey@gmail.com')
})
.add('Large difference', function(){
  !!getDistance('I don\'t really need to compare long texts', 'But what wouldn\'t you do for good benchmarks?')
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });
