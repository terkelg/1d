const test = require('tape');
const flatten = require('../src');

test('standard', t => {
    t.plan(2);

    t.equal(typeof flatten, 'function', 'consturctor is a typeof function');
    t.equal(Array.isArray(flatten([])), true, 'returns array');
});

test('flatten arrays', t => {
    t.plan(5);

    t.deepEqual(flatten(['a', 'b', 'c']), ['a', 'b', 'c'], 'do nothing with already flat arrays');
    t.deepEqual(flatten([['a'], ['b'], ['c']]), ['a', 'b', 'c'], 'flatten 2D array');
    t.deepEqual(flatten([[['a'], ['b']], [['c']], 'd']), ['a', 'b', 'c', 'd'], 'flatten deeply nested array');

    t.deepEqual(flatten(['b', 'c'], ['a']), ['a', 'b', 'c'], 'initial array');
    t.deepEqual(flatten([['c'], ['d']], ['a', ['b']]), ['a', ['b'], 'c', 'd'], 'do not flatten initial array');
});
