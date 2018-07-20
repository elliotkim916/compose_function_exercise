/*
Write a compose function.
https://en.wikipedia.org/wiki/Function_composition
Compose should accept a list of functions and return a new function
which will be the result of calling each function in order from right to left
and pass the results of each call to the next function in the chain.
*/

'use strict';

function compose (...fns) {
  return function (...args) {
    for (let i = fns.length - 1; i > -1; i--) {
      args = [fns[i](...args)];
    }
    return args[0];
  };
}

const assert = require('assert');

assert.equal(compose(decrement, decrement, add)(1, 4), 3);
assert.equal(compose(decrement, increment, add)(2, 10), 12);
assert.equal(compose(decrement, square, add)(3, 3), 35);
assert.equal(compose(decrement, square, add)(-1, 9), 63);

process.stdout.write("If this line runs, you've solved the kata!");
process.exit(0);

// These functions below are only for testing your solution

function add (a, b) {
  return a + b;
}

function square (n) {
  return n * n;
}

function decrement (n) {
  return n - 1;
}

function increment (n) {
  return n + 1;
}