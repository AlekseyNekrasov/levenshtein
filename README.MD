##What?
Lightweight implementation for Levenshtein distance calculation.

##Why?

Just another lightweight implementation with benchmarks, covered by unit tests & with ES2015 features usage.

##Where this library could be useful?

You might consider this library if you want to measure distance between two strings. Is software development it might be useful for emails comparison, and getting suggestions.

```
Levenshtein.getClosest('@nekrasov.nl', [
  '@gmail.com',
  '@nekgasov.nl',
  '@nekasov.nl',
  '@ya.ru'
]);
```

returns: `@nekgasov.nl`.

##Tests
Run `npm test`, or with watch `npm run test-w`

##Benchmarks
Tests performed on: MacBook Pro Early 2015 (2,7 GHz Intel Core i5, 8 GB 1867 MHz DDR3)

**Results:**

| Size | Strings to compare                                                                                 | Results                                      |
| ---- |:--------------------------------------------------------------------------------------------------:| --------------------------------------------:|
| S    | `'some1'` and `'some2'`                                                                            | x 1,093,940 ops/sec ±2.03% (82 runs sampled) |
| M    | `'alexey@nekrasov.nl'`, `'alexey@gmail.com'`                                                       | x 143,556 ops/sec ±1.66% (80 runs sampled)   |
| XL   | `'I don\'t really need to compare long texts'`, `'But what wouldn\'t you do for good benchmarks?'` | x 19,024 ops/sec ±10.04% (70 runs sampled)   |

##Roadmap
- add transpilation step to support older browsers.

##License
----
[MIT](https://opensource.org/licenses/MIT)
