var assert = require('assert')
, Arey = require('./index').Arey
, list = new Arey();

assert.equal(list.of(1,2,3).length,3);
assert.equal(list.isArray([1,2,3]),true,"isArray failed");

