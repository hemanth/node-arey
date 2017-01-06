var assert = require('assert')
, Arey = require('./index')
, list = new Arey();

assert.equal(Arey.of(1,2,3).length,3);
assert.equal(Arey.isArray([1,2,3]),true,"isArray failed");
assert.deepEqual(Arey.diff([1,2,3],[3,4,5]),[1,2],"diff failed");