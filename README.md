# 1D

> Make multi-dimensional arrays as flat as a pancake


## Installation

```
npm install 1d
```


## Usage

```js
const flatten = require('1d');

flatten( [['a'], 'b', ['c', ['d']]] );
// ['a', 'b', 'c', 'd']
```


## API

### oned(arr, res)

Flatten an array into a sweet 1D array

#### arr

Type: `Array`

Input array to flatten

#### res

Type: `Array`<br>
Default: `[]`

Initial array.

> **Note**: The inital array is not being flattened


## License

MIT © [Terkel Gjervig](https://terkel.com)
