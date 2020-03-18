<div align="center">
  <img src="https://github.com/terkelg/1d/raw/master/1d.png" alt="1D" width="280" />
</div>

<h1 align="center">1D</h1>

<div align="center">
  <a href="https://npmjs.org/package/1d">
    <img src="https://img.shields.io/npm/v/1d.svg" alt="version" />
  </a>
  <a href="https://travis-ci.org/terkelg/1d">
    <img src="https://img.shields.io/travis/terkelg/1d.svg" alt="travis" />
  </a>
  <a href="https://npmjs.org/package/1d">
    <img src="https://img.shields.io/npm/dm/1d.svg" alt="downloads" />
  </a>
</div>

<div align="center">Make multi-dimensional arrays as flat as a pancake</div>

<br />


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
