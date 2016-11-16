#What?
Lightweight implementation for Levenshtein distance calculation. Without dependencies.

#Install
```
$ npm install --save up-levenshtein
```

#API
```
getDistance(:string, :string) : number
getClosest(:string, :array) : string
```

#Where this library could be useful?
You might consider this library if you want to measure distance between two strings. For example - emails comparison and getting correction suggestions.

```
Levenshtein.getClosest('@nekrasov.nl', [
  '@gmail.com',
  '@nekgasov.nl',
  '@nekasov.nl',
  '@ya.ru'
]);
```

returns: `@nekgasov.nl`.

#Tests
Run `npm t`

#Benchmarks
To run benchmarks locally: `npm run benchmarks`.

Tests performed on: MacBook Pro Early 2015 (2,7 GHz Intel Core i5, 8 GB 1867 MHz DDR3)

**Results:**

| Size | Strings to compare | Results |
| :---- | :--- | :--- |
| S | `'some1'` and `'some2'` | x 6,729,838 ops/sec ±1.62% (84 runs sampled) |
| M | 'alexey@nekrasov.nl' and 'alexey@gmail.com' | x 987,762 ops/sec ±0.82% (85 runs sampled) |
| XL | 'I don\'t really need to compare long texts' and 'But what wouldn\'t you do for good benchmarks?' | x 158,916 ops/sec ±1.39% (81 runs sampled) |

#License
[MIT](https://opensource.org/licenses/MIT)
